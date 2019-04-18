import React, { Component } from 'react';
import './App.css';
import { Todos } from './components/Todos';
import { TodoForm } from './components/TodoForm';
import { TodosProvider } from './providers/TodosProvider';
import { initialState, todoReducer } from './reducers/TodosReducer';

class App extends Component {
  render() {
    return (
      <TodosProvider initialState={initialState} reducer={todoReducer}>
        <Todos />
        <TodoForm />
      </TodosProvider>
    );
  }
}

export default App;
