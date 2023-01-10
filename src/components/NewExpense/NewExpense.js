import React,{useState} from "react";
import ExpenseForm from "./Expenseform";
import "./NewExpense.css"
const NewExpense=(props)=>{
  const[editing,setediting]=useState(false);

const saveExpenseHandler=(Enteredexpensedata)=>{
  const alldatafromexpen={
    ...Enteredexpensedata,
    id:Math.random().toString()
  }
  props.ongettingdata(alldatafromexpen);
  setediting(false);
}
const starteditingHandler=()=>{
  setediting(true); 
}
const deleteHandler=()=>{
  setediting(false); 
}

    return (
        <div className="new-expense">
      {!editing && <button onClick={starteditingHandler}>Add New Expense</button>}
       {editing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} deletingform={deleteHandler}/>}
        </div>
    );
}


export default NewExpense;