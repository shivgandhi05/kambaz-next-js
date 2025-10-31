import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { ListGroupItem } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

export default function TodoForm() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {todo} = useSelector((state: any) => state.todosReducer);
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