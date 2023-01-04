
import "./Expenseitem.css"
function ExpenseDetails(props) {

    return (
    <div className="expense_details">
      <div className="expense-item_description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
