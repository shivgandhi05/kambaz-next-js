"use client";
import { Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FaRProject } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setQuizzes, addQuiz, deleteQuiz, updateQuiz } from "../../../reducer";
import * as client from "../../../../../client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function QuizEditor({ quizId, onSave, onCancel}: any) {

    const { cid } = useParams();

    const dispatch = useDispatch();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    const [activeSection, setActiveSection] = useState("details");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [questions, setQuestions] = useState<Array<any>>([]);

    const [editingQuestion, setEditingQuestion] = useState(false);
    
   
    const [quiz, setQuiz] = useState({
        _id: '',
        title: 'New Quiz',
        description: 'Quiz Description',
        quizType: 'GRADED_QUIZ',
        points: 0,
        assignmentGroup: 'QUIZZES',
        shuffleAnswers: true,
        timeLimit: 20,
        multipleAttempts: false,
        showCorrectAnswers: 'IMMEDIATELY',
        accessCode: '',
        oneQuestionAtATime: true,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false,
        dueDate: '2024-05-13',
        availableFrom: '2024-05-06',
        availableUntil: '2024-05-20',
        course: cid as string,
        published: false
    });

    useEffect(() => {
        if (quizId && quizId !== 'new') {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const existingQuiz = quizzes.find((q: any) => q._id === quizId);
            if (existingQuiz) {
                setQuiz(existingQuiz);
            }
        }
    }, [quizId, quizzes]);


    
    return (
        <div className="pl-5 max-w-4xl">
            {/* Pill Tab Navigation */}
            <div className="flex gap-2 mb-6 border-b border-gray-300 pb-2">
                <button
                    onClick={() => setActiveSection("details")}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                        activeSection === "details"
                            ? "bg-gray-200 text-gray-900"
                            : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}> Details
                </button>
                <button
                    onClick={() => setActiveSection("questions")}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                        activeSection === "questions"
                            ? "bg-gray-200 text-gray-900"
                            : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}> Questions
                </button>
            </div>

            {/* details  */}
            {activeSection === "details" && (
                <div>
            {/* title */}
            <div id= "wd-quiz-editor" className="mb-4">
            <Form style={{width: 600}}>
                <FormLabel>Quiz Name</FormLabel>
                <FormControl type="text" id="wd-assignment-name" defaultValue={quiz.title} style={{width:370}} onChange={(e) => setQuizzes({...quiz, title : e.target.value})}  />
                <FormControl as="textarea" 
                rows={10} 
                id="wd-assignment-instructions" 
                defaultValue={quiz.description} onChange={(e) => setQuiz({...quiz, description : e.target.value})} />
            </Form>
            </div>

            {/* quiz type */}
            <div id="wd-group">
                <Row className="mb-3" controlid="group">
                    <FormLabel column sm={2}>Quiz Type</FormLabel>
                    <FormSelect id="wd-group" style={{width:370}} onChange={(e) => setQuiz({...quiz, assignmentGroup : e.target.value})}>
                        <option value="GRADED_QUIZ">Graded Quiz</option>
                        <option value="PRACTICE_QUIZ">Practice Quiz</option>
                        <option value="GRADED_SURVEY">Graded Survey</option>
                        <option value="UNGRADED_SURVEY">Ungraded Survey</option>
                    </FormSelect>
                </Row>
            </div>
            {/* points */}
            <div id="wd-points">
                <Row className="mb-3" controlid="points">
                    <FormLabel column sm={2}>Points</FormLabel>
                    <FormControl type="number" id="wd-points" defaultValue={quiz.points} onChange={(e) => setQuiz({...quiz, points : parseInt(e.target.value)})} />
                </Row> 
            </div>

            {/* assignment type */}
            <div id="wd-group">
                <Row className="mb-3" controlid="group">
                    <FormLabel column sm={2}>Assignment Group</FormLabel>
                    <FormSelect id="wd-group" style={{width:370}} onChange={(e) => setQuiz({...quiz, assignmentGroup : e.target.value})}>
                    <option value="QUIZZES">Quizzes</option>
                    <option value="EXAMS">Exams</option>
                    <option value="ASSIGNMENTS">Assignments</option>
                    <option value="PROJECT">Project</option>
                    </FormSelect>
                </Row>
            </div>

                <h5 className="font-semibold text-lg mb-4">Options</h5>
                
                {/* Shuffle Answers */}
                <div className="flex items-center mb-3">
                    <label className="w-64 text-sm">Shuffle Answers</label>
                    <div className="flex gap-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="shuffleAnswers"
                                checked={quiz.shuffleAnswers === false}
                                onChange={() => setQuiz({...quiz, shuffleAnswers: false})}
                                className="mr-2"
                            />
                            No
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="shuffleAnswers"
                                checked={quiz.shuffleAnswers === true}
                                onChange={() => setQuiz({...quiz, shuffleAnswers: true})}
                                className="mr-2"
                            />
                            Yes
                        </label>
                    </div>
                </div>

                {/* time limit */}
                <div className="flex items-center mb-3">
                    <label className="w-64 text-sm">Time Limit (Minutes)</label>
                    <input 
                        type="number" 
                        value={quiz.timeLimit}
                        className="border border-gray-300 rounded px-3 py-2 w-32"
                        onChange={(e) => setQuiz({...quiz, timeLimit: parseInt(e.target.value) || 0})}
                    />
                </div>

                {/* attempts */}
                <div className="flex items-center mb-3">
                    <label className="w-64 text-sm">Multiple Attempts</label>
                    <div className="flex gap-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="multipleAttempts"
                                checked={quiz.multipleAttempts === false}
                                onChange={() => setQuiz({...quiz, multipleAttempts: false})}
                                className="mr-2"
                            />
                            No
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="multipleAttempts"
                                checked={quiz.multipleAttempts === true}
                                onChange={() => setQuiz({...quiz, multipleAttempts: true})}
                                className="mr-2"
                            />
                            Yes
                        </label>
                    </div>
                </div>

                {/* correct asnwers */}
                <div className="flex items-center mb-3">
                    <label className="w-64 text-sm">Show Correct Answers</label>
                    <select 
                        value={quiz.showCorrectAnswers}
                        className="border border-gray-300 rounded px-3 py-2 w-56"
                        onChange={(e) => setQuiz({...quiz, showCorrectAnswers: e.target.value})}>
                        <option value="IMMEDIATELY">Immediately</option>
                        <option value="AFTER_DUE_DATE">After Due Date</option>
                        <option value="NEVER">Never</option>
                    </select>
                </div>

                {/* password */}
                <div className="flex items-center mb-3">
                    <label className="w-64 text-sm">Access Code</label>
                    <input 
                        type="text" 
                        value={quiz.accessCode}
                        placeholder=""
                        className="border border-gray-300 rounded px-3 py-2 w-56"
                        onChange={(e) => setQuiz({...quiz, accessCode: e.target.value})}/>
                </div>

                {/* one question */}
                <div className="flex items-center mb-3">
                    <label className="w-64 text-sm">One Question at a Time</label>
                    <div className="flex gap-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="oneQuestion"
                                checked={quiz.oneQuestionAtATime === false}
                                onChange={() => setQuiz({...quiz, oneQuestionAtATime: false})}
                                className="mr-2"
                            />
                            No
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="oneQuestion"
                                checked={quiz.oneQuestionAtATime === true}
                                onChange={() => setQuiz({...quiz, oneQuestionAtATime: true})}
                                className="mr-2"
                            />
                            Yes
                        </label>
                    </div>
                </div>

                {/* webcam required */}
                <div className="flex items-center mb-3">
                    <label className="w-64 text-sm">Webcam Required</label>
                    <div className="flex gap-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="webcam"
                                checked={quiz.webcamRequired === false}
                                onChange={() => setQuiz({...quiz, webcamRequired: false})}
                                className="mr-2"
                            />
                            No
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="webcam"
                                checked={quiz.webcamRequired === true}
                                onChange={() => setQuiz({...quiz, webcamRequired: true})}
                                className="mr-2"
                            />
                            Yes
                        </label>
                    </div>
                </div>

                {/* locking questions */}
                <div className="flex items-center mb-3">
                    <label className="w-64 text-sm">Lock Questions After Answering</label>
                    <div className="flex gap-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="lockQuestions"
                                checked={quiz.lockQuestionsAfterAnswering === false}
                                onChange={() => setQuiz({...quiz, lockQuestionsAfterAnswering: false})}
                                className="mr-2"
                            /> No
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="lockQuestions"
                                checked={quiz.lockQuestionsAfterAnswering === true}
                                onChange={() => setQuiz({...quiz, lockQuestionsAfterAnswering: true})}
                                className="mr-2"
                            /> Yes
                        </label>
                    </div>
                </div>
            

                <div id="wd-available-dates">
                <FormGroup className="mb-3" id="available-dates">
                    <Row className="mb-3">
                        <FormLabel column sm={2}>Available from</FormLabel>
                        <Col sm={7} className="d-flex align-items-center">
                            <FormControl 
                                type="date" 
                                value={quiz.availableFrom}
                                onChange={(e) => setQuiz({ ...quiz, availableFrom: e.target.value })}
                                id="wd-available-from" 
                                style={{width:160}} 
                            />
                            <span className="mx-2">Until</span>
                            <FormControl 
                                type="date" 
                                value={quiz.availableUntil}
                                onChange={(e) => setQuiz({ ...quiz, availableUntil: e.target.value })}
                                id="wd-available-until" 
                                style={{width:160}} 
                            />   
                        </Col>
                    </Row>
                </FormGroup>
            </div>

            {/* Buttons */}
            <hr className="my-5 border-gray-300" />
            <div className="flex justify-end gap-3 mb-5">
                 {/* cancel button */}
                 <Link id ="wd-cancel-btn" href={`/Courses/${cid}/Quizzes`} className="btn btn-lg btn-secondary mb-2 me-3">Cancel</Link>
                {/* save button */}
                <Link id="wd-save-btn" href={`/Courses/${cid}/Quizzes`} className="btn btn-lg btn-danger mb-2 me-3">Save</Link>
                <Link id="wd-publish-btn" href={`/Courses/${cid}/Quizzes`} className="btn btn-lg btn-primary mb-2 me-3">Save & Publish</Link>
            </div>
                </div>
            )}
        </div>
        
    )
}