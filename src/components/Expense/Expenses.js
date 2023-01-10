import React,{ useState} from "react";
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";
import "./Expenses.css"
import ExpenseChart from "./ExpenseChart";
const Expense=(props)=>{
     
    const [filteredyear,setExpensefilter]=useState ('2021');

    const filterchangeHandler= selectedyear =>{
        setExpensefilter(selectedyear);
    }

    const filtereditem=props.item.filter((expense)=>{
       return (expense.date.getFullYear().toString()===filteredyear);
    });
  
    
    

    return (
        <div>
         <ExpenseFilter selected={filteredyear} onchangefilter={filterchangeHandler}/>
         <ExpenseChart expenses={filtereditem} />
         <ExpensesList item={filtereditem}/>
        </div> 
    );
}

export default Expense;