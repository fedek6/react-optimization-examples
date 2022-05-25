import React from 'react';
import { UnoptimizedList } from './components/UnoptimizedList';
import { OptimizedList } from "./components/OptimizedList";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UnoptimizedList />
        <OptimizedList />
      </header>
    </div>
  );
}

export default App;
