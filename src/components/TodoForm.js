import React from 'react';
import { ADD_TODO } from '../constants';
import { MainContext } from '../providers/MainProvider';

export const TodoForm = () => {
    const inputRef = React.useRef(null)
    const [, dispatch] = React.useContext(MainContext)
    return (
        <div>
            <input ref={inputRef} placeholder='todo'/>
            <button onClick={() => dispatch({type: ADD_TODO, todo: inputRef.current.value})}>Add</button>
        </div>
    )
}