import React from 'react';
import { MainContext } from '../providers/MainProvider';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    /**
     * Access in reading to an specific reducer of global state
     */
    const [{ todoState }] = React.useContext(MainContext)
    return (
        <div>
            {
                todoState.todos.map((elem, index) => <TodoItem key={index} elem={elem} />)
            }
        </div>
    )
}