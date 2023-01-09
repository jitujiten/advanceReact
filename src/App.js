import React,{ useState } from 'react';
import "./App.css";
import Card from "./components/ui/Card";
import "./components/Expense/Expenses.css"
import Expense from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location:"mumbai"
  },
  { id: "e2",
   title: "New TV", 
   amount: 799.49,
  date: new Date(2021, 2, 12),
  location:"kolkata" 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location:"banglore"
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location:"odisha"
  }
]; 


const App=()=> {
  
 const [expensedata,setexpense]=useState(dummy_expenses);

  const  getingdatafromnew=(expens)=>{
    setexpense(()=>{
      return [expens,...expensedata];
    })
  }
  

  return (
    <Card className="expenses">
     <NewExpense ongettingdata={getingdatafromnew}/>
      <Card className="expenses">
      <Expense item={expensedata}/>
      </Card>
    </Card>
  );
}

export default App;
 