import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentHeaderControlButtons() {
    return (
        <div id="wd-assignment-control-buttons" className="float-end">
            <span className="border rounded-pill px-3 py-1 text-black">
                40% of Total
            </span>
            <FaPlus className="ms-3 me-3" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    )
}