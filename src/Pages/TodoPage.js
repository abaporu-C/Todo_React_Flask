import React, {useState, useEffect} from 'react';
import { Card } from '../Components/Card/card.js';
import { Form } from '../Components/Form/form.js';

export const TodoPage = () => {

    const [todo, setTodo] = useState([])
    const [addTodo, setAddTodo] = useState('')

    useEffect(() => {
        fetch('/api')
        .then(response => {
            if (response.ok){                
                return response.json();
            } 
        })
        .then(data => {setTodo(data)})
    }, [])

    const handleFormChange = (inputValue) => {
        setAddTodo(inputValue)
    }

    const handleFormSubmit = () => {
        fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify(
                {'content': addTodo}
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {           
            return response.json()
        })
        .then(message => {            
            setAddTodo('')
            getLatestTodos()
        })
    }

    const getLatestTodos = () => {
        fetch('api').then(res => {
            if (res) return res.json()
        }).then(data => setTodo(data))
    }

    return (
        <div>
            <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
            <Card listOfTodos={todo}/>
        </div>
    )
}