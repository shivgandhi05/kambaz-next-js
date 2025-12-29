"use client";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControlButtons from "./AssignmentHeaderControlButtons";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { FaCaretDown } from "react-icons/fa6";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { useEffect, useState } from "react";
import { setAssignment, addAssignment, deleteAssignment, updateAssignment, editAssignment} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../../client";
import AssignmentEditor from "./[aid]/editor/page";
import { RootState } from "../../../store"
import Link from "next/link";

type Assignment = {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    dueDate: string;
};


export default function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);

    const [ selectedAssignmentId, setSelectedAssignmentId ] = useState<string | null>(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);


    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignment(assignments));
    };
    const onDeleteAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };
    const onCreateNew = () => {
        setSelectedAssignmentId('new');
        setIsEditorOpen(true);
    };

    const onEdit = (assignmentId: string) => {
        setSelectedAssignmentId(assignmentId);
        setIsEditorOpen(true);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSave = async (assignmentData: any) => {
        console.log("onSave called", assignmentData);
        if (selectedAssignmentId === 'new') {
            const newAssignment = await client.createAssignmentForCourse(
                cid as string,
                assignmentData
            );
            
            dispatch(addAssignment(newAssignment));
        } else {
            const updatedAssignment = await client.updateAssignment(assignmentData);
            dispatch(updateAssignment(updatedAssignment));
        }
        setIsEditorOpen(false);
        setSelectedAssignmentId(null);
    };

    const onCancel = () => {
        setIsEditorOpen(false);
        setSelectedAssignmentId(null);
    };
    useEffect(() => {
        fetchAssignments();
    }, []);

    if(isEditorOpen) {
        return (
            <AssignmentEditor assignmentId={selectedAssignmentId} onCreateNew={onCreateNew} onSave={onSave} onCancel={onCancel}/>
    );

    }
    return (
        <div className="ps-4">
            <AssignmentControls onCreateNew={onCreateNew}/>
            <br />
            <br />
            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroupItem className="wd-assignments p-0 me-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <FaCaretDown className="me-2"/>
                        Assignments <AssignmentHeaderControlButtons />
                    </div>
                    <ListGroup className="wd-assignment-list rounded-0">
                        {assignments
                        .filter((assignment) => assignment.course === cid)
                        .map((assignment) =>(
                            <ListGroupItem key={assignment._id} className="wd-assignment-list-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div style={{cursor: 'pointer'}} onClick={() => onEdit(assignment._id)}>
                                    <BsGripVertical className="me-2 fs-3" />
                                    <span className="text-primary">{assignment.title}</span>

                                </div>
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {currentUser && (currentUser as any).role === "FACULTY" && (
                                    <AssignmentControlButtons 
                                    assignmentId={assignment._id}
                                    deleteAssignment={(assignmentId) => onDeleteAssignment(assignmentId)}
                                    />
                                )}
                            </ListGroupItem>

                        ))}
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}