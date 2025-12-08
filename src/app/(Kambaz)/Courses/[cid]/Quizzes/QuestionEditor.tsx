// "use client";
// import { title } from "process";
// import { useState } from "react";
// import { v4 as uuidv4} from "uuid";


// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export default function QuestionEditor({questions, setQuestions}: any) {
//     type Question = {
//         _id: string;
//         type: "MULTIPLE_CHOICE" | "TRUE_FALSE" | "SHORT_ANSWER";
//         title: string;
//         points: number;
//         question: string;
//         choices?: { option: string; isCorrect: boolean }[];
//         editing?: boolean;
//     };
//     const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
    
//     const onAddQuestion = async () => {
//         const newQuestion: Question = {
//             _id: uuidv4(),
//             type: "MULTIPLE_CHOICE",
//             title: "",
//             points: 0,
//             question: "",
//             choices: [
//                 { option: "", isCorrect: false },
//                 { option: "", isCorrect: false },
//                 { option: "", isCorrect: false },
//                 { option: "", isCorrect: true },
//             ],
//             editing: true,
//         };
//         setEditingQuestion(newQuestion);
       
//     }

//     const onSaveQuestion = async () => {
//         if (editingQuestion) {
//             setQuestions([...questions, editingQuestion]);
//             setEditingQuestion(null);   
//         } else {
//             setQuestions(questions);
//         }

// }
