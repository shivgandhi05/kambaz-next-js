import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";
import { assignments } from "../../../Database";

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
        const newAssignment: any = {
          _id: assignment._id || uuidv4(),
          title: assignment.title,
          description: assignment.description,
          points: assignment.points,
          dueDate: assignment.dueDate,
          availableFrom: assignment.availableFrom,
          availableUntil: assignment.availableUntil,
          course: assignment.course,
          assignmentGroup: assignment.assignmentGroup,
          displayGradeAs: assignment.displayGradeAs,
          submissionType: assignment.submissionType,
          assignTo: assignment.assignTo,
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
      editAssignment: (state, { payload: assignmentId}) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        state.assignments = state.assignments.map((a: any) =>
          a._id === assignmentId ? {...a, editing: true} : a
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ) as any;
      }
  
    },
  });

  export const { addAssignment, deleteAssignment, updateAssignment, setAssignment, editAssignment } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;