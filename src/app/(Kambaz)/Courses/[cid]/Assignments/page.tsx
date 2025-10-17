"use client";
import Link from "next/link";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControlButtons from "./AssignmentHeaderControlButtons";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { FaRegEdit } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "next/navigation";
import * as db from "../../../Database";


export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
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
                        {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
                            <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
                                
                                <BsGripVertical className="me-2 fs-3" /> {assignment.title} <AssignmentControlButtons />
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}