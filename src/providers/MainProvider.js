import React from 'react'
import { todoReducer, initialState } from '../reducers/todoReducer';

export const MainContext = React.createContext(null);

export const MainProvider = ({ children }) => {
    const [todoState, todoDispatch] = React.useReducer(todoReducer, initialState);
    /**
     * Get Data / Dispatch function from every reducer
     */

    const globalState = [
        {
            todoState
            /**
             * Put every reducer value here
             */
        }
        , action => [
            todoDispatch
            /**
             * Put every dispatch function from your reducers here
             */
        ].forEach(reducer => reducer(action))
    ]
    
    return (
        <MainContext.Provider value={globalState} >
            {children}
        </MainContext.Provider >
    )
}