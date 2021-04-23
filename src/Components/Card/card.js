import React from 'react';

export const Card = ( {listOfTodos} ) => {
    return (
        <div>
            <ol>
                {listOfTodos.map(todo => <li key={todo.id}>{todo.content}</li>)}
            </ol>            
        </div>
    )
}