"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { ListGroupItem } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { RootState } from "../../store";

export default function TodoForm() {

  const {todo} = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  return(
    <ListGroupItem>
      <button onClick={() => dispatch(addTodo(todo))} id="wd-add-todo-click">Add</button>
      <button onClick={() => dispatch(updateTodo(todo))} id="wd-update-todo-click">Update</button>
      <FormControl defaultValue={todo.title}
      onChange={(e) => dispatch(setTodo({...todo, title: e.target.value}))}  />
    </ListGroupItem>
  )
}