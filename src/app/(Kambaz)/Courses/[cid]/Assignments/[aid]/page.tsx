"use client";
import { Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FaRProject } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";

export default function AssignmentEditor() {
    const [submissionType, setSubmissionType] = useState("ONLINE");
    return (

        
        <div id="wd-assignments-editor" className="ps-5">
            <Form style={{width: 600}}>
                <FormLabel>Assignment Name</FormLabel>
                <FormControl type="text" id="wd-assignment-name" defaultValue="A1"  />
                <FormControl as="textarea" 
                rows={10} 
                id="wd-assignment-instructions" 
                defaultValue={`The assignment is available online
    Submit a link to the landing page of your Web application running on Netlify.
                                The landing page should include the following:

• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`} />
            </Form>
    
            {/* points */}
            <div id="wd-points">
                <Row className="mb-3" controlid="points">
                    <FormLabel column sm={2}>Points</FormLabel>
                    <FormControl type="number" id="wd-points" defaultValue={100} style={{width:370}} />
                </Row> 
            </div>

            {/* assignment type */}
            <div id="wd-group">
                <Row className="mb-3" controlid="group">
                    <FormLabel column sm={2}>Assignment Group</FormLabel>
                    <FormSelect id="wd-group" style={{width:370}}>
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
                    <FormSelect id="wd-display-grade-as" style={{width:370}}>
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
                    <FormSelect value={submissionType} onChange={(e) => setSubmissionType(e.target.value)} style={{width:350}}>
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
                    <FormSelect id="wd-group" style={{width:370}}>
                        <option value="Everyone">Everyone</option>
                    </FormSelect>
                </Row>
            </div>
            
            {/* due date */}
            <div id="wd-due-dates">
                <Row className="mb-3" controlid="due-dates">
                    <FormLabel column sm={2}>Due Date</FormLabel>
                    <Col sm={7}>
                        <FormControl type="date" defaultValue="2024-05-13" id="wd-due-date" style={{width:350}} />
                    </Col>
                </Row>
            </div>

            {/* available dates */}
            <div id="wd-available-dates">
                <FormGroup className="mb-3" id="available-dates">
                <Row className="mb-3" controlid="available-dates">
                    <FormLabel column sm={2}>Available from</FormLabel>
                    <Col sm={7} className="d-flex align-items-center">
                        <FormControl type="date" defaultValue="2024-05-06" id="wd-available-from" style={{width:160}} />
                        <span className="mx-2">Until</span>
                        <FormControl type="date" defaultValue="2024-05-20" id="wd-available-until" style={{width:160}} />   
                    </Col>
                </Row>
                </FormGroup>
            </div>
            {/* buttons */}
            <hr style={{margin: "20px 0"}} />
            <div className="justify-content-end d-flex">
                {/* cancel button */}
                <Link id ="wd-cancel-btn" href="/Courses/1234/Assignments" className="btn btn-lg btn-secondary mb-2 me-3">Cancel</Link>
                {/* save button */}
                <Link id="wd-save-btn" href="/Courses/1234/Assignments" className="btn btn-lg btn-danger mb-2 me-3">Save</Link>
            </div>
        </div>
    )
}