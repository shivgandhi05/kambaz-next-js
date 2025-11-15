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
      setAssignment: (state, action) => {
        state.assignments = action.payload;
      },
      addAssignment: (state, { payload: assignment }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newAssignment = {...state.assignments, _id:uuidv4()};
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

  export const { addAssignment, deleteAssignment, updateAssignment, setAssignment } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;