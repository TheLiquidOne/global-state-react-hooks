import React, { Component } from 'react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { MainProvider } from './providers/MainProvider';

class App extends Component {
  render() {
    return (
      <MainProvider>
        <TodoList />
        <TodoForm />
      </MainProvider>
    );
  }
}

export default App;
