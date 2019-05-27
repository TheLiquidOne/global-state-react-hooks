import React from 'react'
import { MainContext } from '../providers/MainProvider';

export const Todos = () => {
    const [{ todoState }, dispatch] = React.useContext(MainContext)
    console.log(todoState, dispatch)
    return (
        <div>
            {
                todoState.todos.map((elem, index) => <div key={index}>{elem}</div>)
            }
        </div>
    )
}