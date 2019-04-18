import React from 'react'
import { TodoContext } from '../providers/TodosProvider';

export const Todos = () => {
    const [{ todos }] = React.useContext(TodoContext)
    return (
        <div>
            {
                todos.map((elem, index) => <div key={index}>{elem}</div>)
            }
        </div>
    )
}