import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";


export default function AssignmentControlButtons({assignmentId, deleteAssignment}: {
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;}) {

    return (
        <div id="wd-assignment-control-buttons" className="d-flex align-items-center">
            <FaTrash onClick={() => deleteAssignment(assignmentId)} className="text-danger me-2 mb-1"/>
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />

            
        </div>
    )
}