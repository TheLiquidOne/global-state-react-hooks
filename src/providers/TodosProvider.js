import React from 'react'

export const TodoContext = React.createContext()

export const TodosProvider = ({reducer, initialState, children}) => (
    <TodoContext.Provider value={React.useReducer(reducer, initialState)}>
        {children}
    </TodoContext.Provider>
)