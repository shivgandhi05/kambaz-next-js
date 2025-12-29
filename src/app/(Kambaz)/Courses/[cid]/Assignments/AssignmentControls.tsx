import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useDispatch, UseDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addAssignment } from "./reducer";

type AssignmentControlsProps = {
    onCreateNew: () => void;
};

export default function AssignmentControls({onCreateNew}: AssignmentControlsProps) {
    const { cid } = useParams();
    const dispatch =useDispatch();

    const aid = uuidv4();
    return (
        <div id="wd-assignment-controls" className="text-nowrap d-flex align-items-center">
            {/* search bar */}
            <InputGroup style={{ width: "250px" }} className="me-2">
                <InputGroupText className="bg-white">
                <FaSearch />
                <FormControl type="text" placeholder="Search assignments..." className="border-0" />
                </InputGroupText>
            </InputGroup>

            <div className="ms-auto d-flex">
                {/* Add group button */}
                <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-group-btn">
                    <FaPlus className="postion-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </Button>

                {/* Add assignment button */}
                <Button 
                    variant="danger"  
                    size="lg" 
                    className="me-1" 
                    id="wd-add-assignment-btn"
                    onClick={onCreateNew}>
                    <FaPlus className="me-2" />Assignment
                </Button>
            </div>
        </div>
    )
}