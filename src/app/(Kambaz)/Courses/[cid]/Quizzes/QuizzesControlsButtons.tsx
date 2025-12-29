import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";
import * as client from "../../client";

export default function QuizzesControlsButtons() {
    return (
        <div id="wd-assignment-control-buttons" className="float-end">
            <FaTrash />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    )
}