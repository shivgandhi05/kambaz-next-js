"use client";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControlButtons from "./AssignmentHeaderControlButtons";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { FaCaretDown } from "react-icons/fa6";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { useState } from "react";
import { addAssignment, deleteAssignment, updateAssignment} from "./reducer";
import { useSelector, useDispatch } from "react-redux";


export default function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const [ title, setTitle] = useState("");

    
    return (
        <div className="ps-4">
            <AssignmentControls /><br /><br />
            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroupItem className="wd-assignments p-0 me-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <FaCaretDown className="me-2"/>
                        Assignments <AssignmentHeaderControlButtons />
                    </div>
                    <ListGroup className="wd-assignment-list rounded-0">
                        {assignments.filter((assignment) => assignment.course === cid).map((assignment) => (
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