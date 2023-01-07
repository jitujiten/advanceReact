import React, { useState } from "react";
import "./Expenseform.css";


const ExpenseForm = () => {

const [titleentervalue,titlechangevalue]=useState("");
const [amountentervalue,amountchangevalue]=useState("");
const [dateentervalue,datechangevalue]=useState("");

  const titlechangeHandler = (event) => {
    titlechangevalue(event.target.value);
  };

  const amountchangeHandler = (event) => {
    amountchangevalue(event.target.value);
  };

  const datechangeHandler = (event) => {
    datechangevalue(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titlechangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountchangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
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
