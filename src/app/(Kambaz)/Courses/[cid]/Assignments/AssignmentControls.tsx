import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";


export default function AssignmentControlButtons() {
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
                <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
                    <FaPlus className="postion-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Button>
            </div>
        </div>
    )
}