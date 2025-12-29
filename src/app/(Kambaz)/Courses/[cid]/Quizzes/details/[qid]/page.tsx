"use client";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { setQuizzes } from "../../reducer";
import * as client from "../../../../client";

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
            <p>Quiz Type: {quiz.quizType}</p>
            <p>Points: {quiz.points}</p>
            <p>Assignment Group: {quiz.assignmentGroup} </p>
            <p>Shuffle Answers: {quiz.shuffleAnswers}</p>
            <p>Time limit: {quiz.timeLimit}</p>
            <p>Multiple Attempts: {quiz.multipleAttempts}</p>
            <p>Show correct answers: {quiz.showCorrectAnswers} </p>
            <p>Access Code: {quiz.accessCode ? quiz.accessCode : " No access code required"}</p>
            <p>One question at a time: {quiz.oneQuestionAtATime} </p>
            <p>Webcam Required: {quiz.webCamRequired} </p>
            <p>Lock questions after answering: {quiz.lockQuestionsAfterAnswering}</p>
            <p>Due Date: {quiz.dueDate}</p>
            <p>Available date: {quiz.availableDate}</p>
            <p>Until date: {quiz.untilDate}</p>
            <Link href={`/Courses/${cid}/Quizzes`}>
                <Button variant="primary">Back to Quizzes</Button>
            </Link>
        </div>
    )
}