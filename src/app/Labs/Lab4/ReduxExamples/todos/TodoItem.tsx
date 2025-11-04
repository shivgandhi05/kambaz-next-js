"use client";
import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({todo}: {
    todo: {id: string, title: string};
}) {
  const dispatch = useDispatch();
    return (
        <ListGroupItem key={todo.id}>
      <button onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"> Delete </button>
      <button onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"> Edit </button>
      {todo.title}    
        </ListGroupItem>);
    }
