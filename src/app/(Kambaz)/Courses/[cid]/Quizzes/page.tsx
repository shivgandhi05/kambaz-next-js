"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import QuizzesControls from "./QuizzesControls";
import { FaCaretDown } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import QuizzesControlsButtons from "./QuizzesControlsButtons";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Link from "next/link";
import * as client from "../../client";
import QuizDetails from "./details/page";
import * as db from "../../../Database";

type Quiz = {
    _id: string;
    title: string;
    course: string;
    description: string;
    quizType: string;
    points: number;
    dueDate: string;
};

export default function Quizzes() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);



    return (
        <div className="ps-4">
            <QuizzesControls />
            <br />
            <br />
            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroupItem className="wd-assignments p-0 me-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <FaCaretDown className="me-2"/>
                        Quizzes 
                    </div>
                    {quizzes.filter((quiz: Quiz) => quiz.course === cid).map((quiz: Quiz) => (
                            <ListGroupItem key={quiz._id} className="wd-quiz-list-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> 
                                <Link href={`/Courses/${cid}/Quizzes/details/${quiz._id}`}> 
                                {quiz.title}
                                </Link>
                                <QuizzesControlsButtons />
                            </ListGroupItem>
                        ))}
                </ListGroupItem>
            </ListGroup>
            
        </div>
    )
}
