
import "./Expenseitem.css"
import Expense from "./Expenses";
const ExpenseDetails=(props)=> {

  const deleteHandler=(e)=>{
    e.preventDefault();
    
    console.log(props.id);
  }

    return (
    <div className="expense_details">
      <div className="expense-item_description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button  className="btn" onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default ExpenseDetails;
