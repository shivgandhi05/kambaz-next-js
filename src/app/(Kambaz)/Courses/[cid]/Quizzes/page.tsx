"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import QuizzesControls from "./QuizzesControls";
import { FaCaretDown } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import QuizzesControlsButtons from "./QuizzesControlsButtons";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Link from "next/link";
import * as client from "../../client";
import QuizDetails from "./details/[qid]/page";
import * as db from "../../../Database";
import { RootState } from "../../../store";
import { setQuiz, addQuiz, deleteQuiz, updateQuiz } from "./reducer";
import QuizEditor from "./details/[qid]/editor/page";

type Quiz = {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    dueDate: string;
    availableFrom: string;
    availableUntil: string;
    quizType: string;
    AssignmentGroup: string;
    shuffleAnswers: boolean;
    timeLimitMinutes: number;
    multipleAttemptsAllowed: boolean;
    numberOfAttemptsAllowed: boolean;
    showCorrectAnswers: string;
    accessCode?: string;
    oneQuestionAtATime: boolean;
    webcamRequired: boolean;
    lockQuestionsAfterAnswering: boolean;

};

export default function Quizzes() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    
    const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);

    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuiz(quizzes));
    };

    const onDeleteQuiz = async (quizId: string) => {
        await client.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    };

    const onCreateNew = () => {
        setSelectedQuizId('new');
        setIsEditorOpen(true);
    };

    const onEdit = (quizId: string) => {
        setSelectedQuizId(quizId);
        setIsEditorOpen(true);
    };

    const onSave = async (quizData: Quiz) => {
        console.log("onSave called", quizData);
        if (selectedQuizId === 'new') {
            console.log("Creating new quiz for course", cid);
            const newQuiz = await client.createQuizForCourse(
                cid as string,
                quizData
            );
            dispatch(addQuiz(newQuiz));
        } else {
            console.log("Updating quiz", quizData);
            const updatedQuiz = await client.updateQuiz(quizData);
            dispatch(updateQuiz(updatedQuiz));
        }
        console.log("Saved quiz, closing editor");
        setIsEditorOpen(false);
        setSelectedQuizId(null);
    };

    const onCancel = () => {
        setIsEditorOpen(false);
        setSelectedQuizId(null);
    };

    useEffect(() => {
        fetchQuizzes();
    }, []);

    if (isEditorOpen) {
        return (
            <QuizEditor quizId={selectedQuizId} onCreateNew={onCreateNew} onCancel={onCancel} onSave={onSave} />
        );
    }

    return (
        <div className="ps-4">
            <QuizzesControls onCreateNew={onCreateNew}/>
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
