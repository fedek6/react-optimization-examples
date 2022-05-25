import React from 'react';
import { UnoptimizedList } from './components/UnoptimizedList';
import { OptimizedList } from "./components/OptimizedList";
import { FilteredUnoptimizedList } from "./components/FilteredUnoptimizedList";
import { FilteredOptimizedList } from "./components/FilteredOptimizedList";
import { FilteredUnoptimizedListWithCallback } from "./components/FilteredUnoptimizedListWithCallback";
import { FilteredOptimizedListWithCallback } from "./components/FilteredOptimizedListWithCallback";
import { FilteredOptimizedListWithCallbackBuggyConsole } from "./components/FilteredOptimizedListWithCallbackBuggyConsole";
import { FilteredOptimizedListWithCallbackNonBuggyConsole } from "./components/FilteredOptimizedListWithCallbackNonBuggyConsole";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React.memo example:</h1>
        <UnoptimizedList />
        <OptimizedList />
        <h1>useMemo example:</h1>
        <FilteredUnoptimizedList />
        <FilteredOptimizedList />
        <h1>useCallback example:</h1>
        <FilteredUnoptimizedListWithCallback />
        <FilteredOptimizedListWithCallback />
        <h1>useCallback passed to useEffect:</h1>
        <FilteredOptimizedListWithCallbackBuggyConsole />
        <FilteredOptimizedListWithCallbackNonBuggyConsole />
      </header>
    </div>
  );
}

export default App;
