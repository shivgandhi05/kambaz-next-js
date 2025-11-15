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
import { setAssignment, addAssignment, deleteAssignment, updateAssignment} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../../client";
import AssignmentEditor from "./[aid]/page";

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const [ selectedAssignmentId, setSelectedAssignmentId ] = useState<string | null>(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);


    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignment(assignments));
    };
    const handleDeleteAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };
    const handleCreateNew = () => {
        setSelectedAssignmentId('new');
        setIsEditorOpen(true);
    };

    const handleEdit = (assignmentId: string) => {
        setSelectedAssignmentId(assignmentId);
        setIsEditorOpen(true);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSaveAssignment = async (assignmentData: any) => {
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

    const handleCancel = () => {
        setIsEditorOpen(false);
        setSelectedAssignmentId(null);
    };
    useEffect(() => {
        fetchAssignments();
    }, []);

    if(isEditorOpen) {
        return (
            <AssignmentEditor assignmentId={selectedAssignmentId} onSave={handleSaveAssignment} onCancel={handleCancel}/>
    );

    }
    return (
        <div className="ps-4">
            <AssignmentControls />
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
                        {assignments.filter((assignment: Assignment) => assignment.course === cid).map((assignment: Assignment) => (
                            <ListGroupItem key={assignment._id} className="wd-assignment-list-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> {assignment.title} <AssignmentControlButtons />
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}