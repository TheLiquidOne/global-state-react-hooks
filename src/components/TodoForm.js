import React from 'react'
import { TodoContext } from '../providers/TodosProvider';
import { ADD_TODO } from '../constants';

export const TodoForm = () => {
    const inputRef = React.useRef(null)
    const [, dispatch] = React.useContext(TodoContext)
    return (
        <div>
            <input ref={inputRef} placeholder='todo'/>
            <button onClick={() => dispatch({type: ADD_TODO, todo: inputRef.current.value})}>Add</button>
        </div>
    )
}