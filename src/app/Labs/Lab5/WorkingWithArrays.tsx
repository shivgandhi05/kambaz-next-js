"use client";
import React, {useState} from "react";
import { FormCheck, FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithArrays() {
    const API = `${HTTP_SERVER}/lab5/todos`;
    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment", 
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    return(
        <div id="wd-working-with-arrays">
            <h3>Working with Arrays</h3>
            <h4>Retrieving arrays</h4>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>Get todos</a><hr/>
            <h4>Filtering Array items</h4>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary" href={`${API}?completed=true`}>Get Completed todos</a><hr/>
            <h4>Retrieving an item from an Array by ID</h4>
            <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>Get todo by id</a>
            <FormControl id="wd-todo-id" defaultValue={todo.id} className="w-50" onChange={(e) => setTodo({...todo, id: e.target.value})}/>
            <hr/>
            <h3>Creating new items in an Array</h3>
            <a id="wd-retirieve-completed-todos" className="btn btn-primary" href={`${API}/create`}>Create Todo</a>
            <hr/>
            <h3>Removing from an array</h3>
            <a id="wd-remove-todo" className="btn btn-primary float-end" href={`${API}/${todo.id}/delete`}>Remove todo with ID = {todo.id}</a>
            <FormControl defaultValue={todo.id} className="w-50" onChange={(e) => setTodo({...todo, id: e.target.value})}/>
            <hr/>
            <h3>Updating an Item in an array</h3>
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end">Update todo</a>
            <FormControl defaultValue={todo.id} className="w-25 float-start me-2" onChange={(e) => setTodo({...todo, id: e.target.value})}/>
            <FormControl defaultValue={todo.title} className="w-50 float-start" onChange={(e) => setTodo({...todo, title: e.target.value})}/><br/><hr/>
            {/* description */}
            <a id="wd-update-todo-description" className="btn btn-primary float-end" href={`${API}/${todo.id}/description/${todo.description}`}>Describe todo ID = {todo.id}</a>
            <FormControl id="wd-todo-description" className="w-50" defaultValue={todo.description} onChange={(e) => setTodo({...todo, description: e.target.value})}/><hr/>
            {/* completed */}
            <a id="wd-update-todo-completed" className="btn btn-primary float-end" href={`${API}/${todo.id}/completed/${todo.completed}`}>Complete todo id = {todo.id}</a>
            <FormCheck type="checkbox" id="wd-todo-completed" checked={todo.completed} onChange={(e) => setTodo({...todo, completed: e.target.checked})}/>
                <br/><br/> <hr/>
        </div>
    )
}