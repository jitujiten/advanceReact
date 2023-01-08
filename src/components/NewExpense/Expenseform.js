import React, { useState } from "react";
import "./Expenseform.css";


const ExpenseForm = (props) => {

const [titleentervalue,titlechangevalue]=useState("");
const [amountentervalue,amountchangevalue]=useState("");
const [dateentervalue,datechangevalue]=useState("");

// const [userInput,setuserInput]=useState({
//     titleentervalue:"",
//     amountentervalue:"",
//     dateentervalue:""
// });

  const titlechangeHandler = (event) => {
     titlechangevalue(event.target.value);

    // setuserInput({
    //     ...userInput,
    //     titlechangevalue:event.target.value 
    // })

    // setuserInput((prvState)=>{
    //  return {...prvState, titlechangevalue:event.target.value } ;
    // })
  };

  const amountchangeHandler = (event) => {
    amountchangevalue(event.target.value);

    // setuserInput({
    //     ...userInput,
    //     amountchangevalue:event.target.value  
    // }); 
  };

  const datechangeHandler = (event) => {
    datechangevalue(event.target.value);

    // setuserInput({
    //     ...userInput,
    //     datechangevalue:event.target.value
    // });
  };

  const submiting=(event)=>{
    event.preventDefault(); 
   const alldata= {
        title:titleentervalue,
        amount:amountentervalue,
        date:new Date(dateentervalue)
    };  
    props.onSaveExpenseData(alldata);
    titlechangevalue("");
    amountchangevalue("");
    datechangevalue("");
  }



  return (
    <form onSubmit={submiting}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleentervalue} onChange={titlechangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amountentervalue} onChange={amountchangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            value={dateentervalue}
            onChange={datechangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
