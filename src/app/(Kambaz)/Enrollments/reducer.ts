import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
    enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        enrollInCourse: (state, {payload: {userId, courseId} }) => {
            const newEnrollment = {
                _id: new Date().getTime().toString(),
                user: userId,
                course: courseId,
            };
             // eslint-disable-next-line @typescript-eslint/no-explicit-any
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        unenrollFromCourse: (state, { payload: { userId, courseId } }) => {
            state.enrollments = state.enrollments.filter(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (enrollment: any) => 
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    !(enrollment.user === userId && enrollment.course === courseId)) as any;
        },
    },
});

export const { setEnrollments, enrollInCourse, unenrollFromCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;