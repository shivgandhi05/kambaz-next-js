"use client";
import { Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FaRProject } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function QuizEditor({ quizId, onSave, onCancel}: any) {
    const { cid } = useParams();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const [quiz, setQuiz] = useState({
        _id: '',
        title: 'New Quiz',
        description: `This is a new quiz.`,
        points: 100,
        quizGroup: 'QUIZZES',
        displayGradeAs: 'PERCENTAGE',
        course: cid as string,
    });
}