import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";
import { assignments } from "@/app/(Kambaz)/Database";

const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, { payload: assignment }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newAssignment: any = {
            _id: uuidv4(),
            title: assignment.title,
            course: assignment.course,
            description: assignment.description || "",
            points: assignment.points || 0,
            dueDate: assignment.dueDate || "",
            availableFrom: assignment.availableFrom || "",
            availableUntil: assignment.availableUntil || "",
            published: false,
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          state.assignments = [...state.assignments, newAssignment] as any;
        },
      deleteAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.filter(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (a: any) => a._id !== assignmentId) as any;
      },
      updateAssignment: (state, { payload: assignment }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        state.assignments = state.assignments.map((a: any) =>
          a._id === assignment._id ? assignment : a
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ) as any;
      },
  
    },
  });

  export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;