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
import QuizDetails from "./details/[qid]/page";
import * as db from "../../../Database";

type Quiz = {
    _id: string;
    title: string;
    course: string;
    description: string;
    quizType: string;
    points: number;
    dueDate: string;
    timeLimit: number;
    showCorrectAnswers: boolean;
    oneQuestionAtATime: boolean;
    lockQuestionsAfterAnswering: boolean;
    assignmentGroup: string;
    shuffleAnswers: boolean;
    multipleAttempts: boolean;
    webcamRequired: boolean;
    accessCode?: string;
    availableDate: string;
    untilDate: string;

};

export default function Quizzes() {
    return (
        <div>
            <h2>Quizzes</h2>
            <h3>Coming Soon...</h3>
        </div>
    )
}
