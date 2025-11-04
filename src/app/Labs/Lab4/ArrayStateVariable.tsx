"use client";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ArrayStateVariable() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { todos } = useSelector((state: any) => state.todosReducer);
    const [array, setArray] = useState([1,2,3,4,5]);
    const addElement = () => {
        setArray(prev => [...prev, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(prev => prev.filter((_, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button onClick={addElement}>Add element</button>
            <ul>{array.map((item, index) => (
                <li key={index}>{item}
                <button onClick={() => deleteElement(index)}>Delete</button>
            </li>))}</ul>
            <hr/>
        </div>
    )
}