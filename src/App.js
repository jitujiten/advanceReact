import React from 'react';
import "./App.css";
import Card from "./components/ui/Card";
import "./components/Expense/Expenses.css"
import Expense from './components/Expense/Expenses';

const App=()=> {
  return (
    <div>
      <h2>let's get started</h2>
      <Card className="expenses">
      <Expense/>
      </Card>
    </div>
  );
}

export default App;
 