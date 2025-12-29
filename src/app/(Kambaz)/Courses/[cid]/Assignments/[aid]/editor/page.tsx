"use client";
import { Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FaRProject } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { RootState} from "../../../../../store"
import * as client from "../../client";

type AssignmentEditorProps = {
    assignmentId: string | null;
    onCreateNew: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSave: (assignmentData: any) => void;
    onCancel: () => void;
}


export default function AssignmentEditor({ assignmentId, onCreateNew, onSave, onCancel}: AssignmentEditorProps) {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();

    const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);

    const [submissionType, setSubmissionType] = useState("ONLINE");

    const [assignment, setAssignment] = useState({
        _id: '',
        title: 'New Assignment',
        description: `The assignment is available online
Submit a link to the landing page of your Web application running on Netlify.
The landing page should include the following:

- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`,
        points: 100,
        assignmentGroup: 'ASSIGNMENTS',
        displayGradeAs: 'PERCENTAGE',
        submissionType: 'ONLINE',
        onlineEntryOptions: {
            textEntry: false,
            websiteUrl: false,
            mediaRecordings: false,
            studentAnnotation: false,
            fileUploads: false
        },
        assignTo: 'Everyone',
        dueDate: '2024-05-13',
        availableFrom: '2024-05-06',
        availableUntil: '2024-05-20',
        course: cid as string,
    });
    useEffect(() => {
        if (assignmentId && assignmentId !== 'new') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const existingAssignment = assignments.find((a: any) => a._id === assignmentId);
            if (existingAssignment) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setAssignment({...existingAssignment} as any);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setSubmissionType((existingAssignment as any).submissionType || 'ONLINE');
            }
        } else if (assignmentId === 'new') {
            setAssignment({
                _id: '',
                title: 'New Assignment',
                description: `The assignment is available online
        Submit a link to the landing page of your Web application running on Netlify.
        The landing page should include the following:
        
        - Your full name and section
        - Links to each of the lab assignments
        - Link to the Kanbas application
        - Links to all relevant source code repositories
        
        The Kanbas application should include a link to navigate back to the landing page.`,
                points: 100,
                assignmentGroup: 'ASSIGNMENTS',
                displayGradeAs: 'PERCENTAGE',
                submissionType: 'ONLINE',
                onlineEntryOptions: {
                    textEntry: false,
                    websiteUrl: false,
                    mediaRecordings: false,
                    studentAnnotation: false,
                    fileUploads: false
                },
                assignTo: 'Everyone',
                dueDate: '2024-05-13',
                availableFrom: '2024-05-06',
                availableUntil: '2024-05-20',
                course: cid as string,
            });
            setSubmissionType('ONLINE');
        }
    }, [assignmentId, assignments, cid]);

    const handleSave = () => {
        onSave(assignment);    
    };
    
    
    return (

        
        <div id="wd-assignments-editor" className="ps-5">
            <Form style={{width: 600}}>
                <FormLabel>Assignment Name</FormLabel>
                <FormControl type="text" id="wd-assignment-name" value={assignment.title} style={{width:370}} onChange={(e) => setAssignment({...assignment, title : e.target.value})}  />
                <FormControl as="textarea" 
                rows={10} 
                id="wd-assignment-instructions" 
                value={assignment.description} onChange={(e) => setAssignment({...assignment, description : e.target.value})} />
            </Form>
    
            {/* points */}
            <div id="wd-points">
                <Row className="mb-3" controlid="points">
                    <FormLabel column sm={2}>Points</FormLabel>
                    <FormControl type="number" id="wd-points" value={assignment.points} onChange={(e) => setAssignment({...assignment, points : parseInt(e.target.value)})} />
                </Row> 
            </div>

            {/* assignment type */}
            <div id="wd-group">
                <Row className="mb-3" controlid="group">
                    <FormLabel column sm={2}>Assignment Group</FormLabel>
                    <FormSelect id="wd-group" style={{width:370}} onChange={(e) => setAssignment({...assignment, assignmentGroup : e.target.value})}>
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PARTICIPATION">PARTICIPATION</option>
                    </FormSelect>
                </Row>
            </div>

            {/* grade as */}
            <div id="wd-display-grade-as">
                <Row className="mb-3" controlid="display-grade-as">
                    <FormLabel column sm={2}>Display Grade As</FormLabel>
                    <FormSelect id="wd-display-grade-as" style={{width:370}} value={assignment.displayGradeAs} onChange={(e) => setAssignment({...assignment, displayGradeAs : e.target.value})}>
                        <option value="PERCENTAGE">Percentage</option>
                        <option value="LETTER">Letter</option>
                        <option value="POINTS">Points</option>
                    </FormSelect>
                </Row>
            </div>

            {/* submission method */}
            <div id="wd-submission-type">
                <Row className="mb-3" controlid="submission-type">
                <FormLabel column sm={2}>Submission Type</FormLabel>
                <Col sm={7}>
                    <FormSelect value={submissionType} onChange={(e) => setAssignment({...assignment, submissionType : e.target.value})} style={{width:350}}>
                        <option value="ONLINE">Online</option>
                        <option value="PAPER">Paper</option>
                        <option value="NO_SUBMISSION">No Submission</option>
                    </FormSelect>
                    {submissionType === "ONLINE" && (
                        <div className="border rounded p-3 mt-3">
                        <div className="fw-semibold mb-2">Online Entry Options</div>
                        <FormCheck
                          id="wd-text-entry"
                          type="checkbox"
                          label="Text Entry"
                        />
                        <FormCheck
                          id="wd-website-url"
                          type="checkbox"
                          label="Website URL"  
                        />
                        <FormCheck
                          id="wd-media-recordings"
                          type="checkbox"
                          label="Media Recordings"
                        />
                        <FormCheck
                          id="wd-student-annotation"
                          type="checkbox"
                          label="Student Annotation"
                        />
                        <FormCheck
                          id="wd-file-upload"
                          type="checkbox"
                          label="File Uploads"
                        />
                        </div>
                    )}
                </Col>
                </Row>
            </div>

            {/* assign to */}
            <div id="wd-assign-to">
                <Row className="mb-3" controlid="assign-to">
                    <FormLabel column sm={2}>Assign To</FormLabel>
                    <FormSelect id="wd-group" style={{width:370}} value={assignment.assignTo} onChange={(e) => setAssignment({ ...assignment, assignTo: e.target.value })}>
                        <option value="Everyone">Everyone</option>
                    </FormSelect>
                </Row>
            </div>
            
            {/* due date */}
            <div id="wd-due-dates">
                <Row className="mb-3" controlid="due-dates">
                    <FormLabel column sm={2}>Due Date</FormLabel>
                    <Col sm={7}>
                        <FormControl type="date" value={assignment.dueDate} id="wd-due-date" style={{width:350}} onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} />
                    </Col>
                </Row>
            </div>

            {/* available dates */}
            <div id="wd-available-dates">
                <FormGroup className="mb-3" id="available-dates">
                    <Row className="mb-3">
                        <FormLabel column sm={2}>Available from</FormLabel>
                        <Col sm={7} className="d-flex align-items-center">
                            <FormControl 
                                type="date" 
                                value={assignment.availableFrom}
                                onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                                id="wd-available-from" 
                                style={{width:160}} 
                            />
                            <span className="mx-2">Until</span>
                            <FormControl 
                                type="date" 
                                value={assignment.availableUntil}
                                onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
                                id="wd-available-until" 
                                style={{width:160}} 
                            />   
                        </Col>
                    </Row>
                </FormGroup>
            </div>
            {/* buttons */}
            <hr style={{margin: "20px 0"}} />
            <div className="justify-content-end d-flex">
                {/* cancel button */}
                <Button id ="wd-cancel-btn"  className="btn btn-lg btn-secondary mb-2 me-3" onClick={onCancel}>Cancel</Button>
                {/* save button */}
                <Button id="wd-save-btn" className="btn btn-lg btn-danger mb-2 me-3" onClick={handleSave}>Save</Button>
            </div>
        </div>
    )
}