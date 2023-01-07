import React from 'react';
import "./App.css";
import Card from "./components/ui/Card";
import "./components/Expense/Expenses.css"
import Expense from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App=()=> {
  return (
    <div>
     <NewExpense/>
      <Card className="expenses">
      <Expense/>
      </Card>
    </div>
  );
}

export default App;
 