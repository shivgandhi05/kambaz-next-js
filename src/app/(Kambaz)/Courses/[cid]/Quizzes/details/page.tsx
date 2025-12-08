"use client";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { setQuizzes } from "../reducer";
import * as client from "../../../client";

export default function QuizDetails() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    useEffect(() => {
        if (quizzes.length === 0) {
        }
    })

     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const quiz = quizzes.find((q: any) => q._id === qid);

    if (quizzes.length === 0) {
        return <div>fjf</div>;
    }

    if (!quiz) {
        return <div>Quiz not found</div>;
    }

    return (
        <div className="p-4">
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
            <p>Type: {quiz.quizType}</p>
            <p>Points: {quiz.points}</p>
            <p>Due Date: {quiz.dueDate}</p>
            <Link href={`/Courses/${cid}/Quizzes`}>
                <Button variant="primary">Back to Quizzes</Button>
            </Link>
        </div>
    )
}