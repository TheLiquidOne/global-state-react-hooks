import React, { Component } from 'react';
import { Todos } from './components/Todos';
import { TodoForm } from './components/TodoForm';
import { MainProvider } from './providers/MainProvider';

class App extends Component {
  render() {
    return (
      <MainProvider>
        <Todos />
        <TodoForm />
      </MainProvider>
    );
  }
}

export default App;
