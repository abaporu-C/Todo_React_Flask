import React, {useState, useEffect} from 'react';
import { Delete } from '../Components/Delete/delete';
import {
    Link,
    useParams
  } from "react-router-dom";

export const ShowPage = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch(`/api/${id}`)
        .then(res => res.json())
        .then(data => setTodo(data))
    }, [id])

    return (
        <div>
            {todo.length > 0 && todo.map(data => <div key={data.id}>{data.content}</div>)}
            <Delete id={id}/>
            <hr></hr>
            <Link to={'/'}> Back to todos </Link>
        </div>
    )
}