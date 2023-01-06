import React, { useState } from 'react';
import "./Expenseitem.css"
const ExpenseDetails=(props)=> {
  const [amount,setTitle]=useState(props.amount);

  const addHandler=()=>{
    setTitle(100)
    console.log(amount);
  }

    return (
    <div className="expense_details">
      <div className="expense-item_description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      <button  className="btn" onClick={addHandler}>add amount</button>
    </div>
  );
}

export default ExpenseDetails;
