import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { quizzes } from "../../../Database";

const initialState = {
    quizzes: [],
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuiz: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, { payload: quiz }) => {
            const newQuiz = { ...quiz, _id: quiz._id || uuidv4() };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },
        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (q: any) => q._id !== quizId
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ) as any;
        },
        updateQuiz: (state, { payload: quiz }) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            state.quizzes = state.quizzes.map((q: any) =>
                q._id === quiz._id ? quiz : q
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ) as any;
        },
    },
});

export const { addQuiz, deleteQuiz, updateQuiz, setQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;