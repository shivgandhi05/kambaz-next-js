import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { IoEllipsisVertical } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import { addQuiz } from "./reducer";
import * as client from "../../client";

type QuizControlButtonsProps = {
    onCreateNew: () => void;
}

export default function QuizControlButtons({onCreateNew}: QuizControlButtonsProps) {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const qid = uuidv4();

    return (
        <div id="wd-quiz-controls" className="text-nowrap d-flex align-items-center">
            {/* search bar */}
            <InputGroup style={{ width: "250px" }} className="me-2">
                <InputGroupText className="bg-white">
                <FaSearch />
                <FormControl type="text" placeholder="Search for Quiz" className="border-0" />
                </InputGroupText>
            </InputGroup>

            <div className="ms-auto d-flex">
                {/* Add quiz button */}
                <Link href={`/Courses/${cid}/Quizzes/details/${qid}/editor`}
                    onClick={() => {
                        dispatch(addQuiz({_id: qid, title: "New Quiz", course: cid, }));
                    }}
                    className="btn btn-danger btn-lg me-1" id="wd=add-quiz-btn">
                        <FaPlus className="me-2" />Quiz
                </Link>
                {/* ellipses button */}
                <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-quiz-ellipses-btn">
                    <IoEllipsisVertical className="fs-4" />
                </Button>
            </div>
        </div>
    )
}