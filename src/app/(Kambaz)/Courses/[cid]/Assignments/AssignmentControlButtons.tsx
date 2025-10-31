import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";

export default function AssignmentControlButtons() {
    return (
        <div id="wd-assignment-control-buttons" className="float-end">
            <FaTrash />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    )
}