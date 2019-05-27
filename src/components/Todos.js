import React from 'react'
import { MainContext } from '../providers/MainProvider';

export const Todos = () => {
    const [{ todoState }] = React.useContext(MainContext)
    return (
        <div>
            {
                todoState.todos.map((elem, index) => <div key={index}>{elem}</div>)
            }
        </div>
    )
}