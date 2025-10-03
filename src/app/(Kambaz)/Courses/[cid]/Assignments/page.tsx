import Link from "next/link";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControlButtons from "./AssignmentHeaderControlButtons";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { FaRegEdit } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import AssignmentControlButtons from "./AssignmentControlButtons";




export default function Assignments() {
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
                        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 ">
                            <BsGripVertical className="me-2 fs-3" />
                            <FaRegEdit className="me-2"/>
                            <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link">A1</Link>
                            <AssignmentControlButtons />
                            <div className="wd-assignment-sub mt-2 ps-5 fs-6">
                                <span className="text-danger">Multiple Modules</span> |{" "}
                                <span><strong>Not available until</strong> May 6 at 12:00am</span> |{" "}
                                <span><strong>Due</strong> May 13 at 11:59pm</span> |{" "}
                                <span>100 pts</span>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <FaRegEdit className="me-2"/>
                            <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link">A2</Link>
                            <AssignmentControlButtons />
                            <div className="wd-assignment-sub mt-2 ps-5 fs-6">
                                <span className="text-danger">Multiple Modules</span> |{" "}
                                <span><strong>Not available until</strong> May 13 at 12:00am</span> |{" "}
                                <span><strong>Due</strong> May 20 at 11:59pm</span> |{" "}
                                <span>100 pts</span>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <FaRegEdit className="me-2"/>
                            <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link">A3</Link>
                            <AssignmentControlButtons />
                            <div className="wd-assignment-sub mt-2 ps-5 fs-6">
                                <span className="text-danger">Multiple Modules</span> |{" "}
                                <span><strong>Not available until</strong> May 20 at 12:00am</span> |{" "}
                                <span><strong>Due</strong> May 27 at 11:59pm</span> |{" "}
                                <span>100 pts</span>
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
            {/* <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link">A1 - ENV + HTML</Link>
                    <div className="wd-assignment-sub">
                        <span>Multiple Modules</span> |{" "}
                        <span><strong>Not available until</strong> May 6 at 12:00am</span> |{" "}<br/>
                        <span><strong>Due</strong> May 13 at 11:59pm</span> |{" "}
                        <span>100 pts</span>
                    </div>
                </li>
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link">A2 - CSS + BOOTSTRAP</Link>
                    <div className="wd-assignment-sub">
                        <span>Multiple Modules</span> |{" "}
                        <span><strong>Not available until</strong> May 13 at 12:00am</span> |{" "}<br/>
                        <span><strong>Due</strong> May 20 at 11:59pm</span> |{" "}
                        <span>100 pts</span>
                    </div>
                </li>
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link">A3 - JAVASCRIPT + REACT</Link>
                    <div className="wd-assignment-sub">
                        <span>Multiple Modules</span> |{" "}
                        <span><strong>Not available until</strong> May 20 at 12:00am</span> |{" "}<br/>
                        <span><strong>Due</strong> May 27 at 11:59pm</span> |{" "}
                        <span>100 pts</span>
                    </div>
                </li>
            </ul> */}
        </div>
    )
}