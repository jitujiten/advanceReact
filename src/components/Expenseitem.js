import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function Expenseitem(props) {
 

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails  amount={props.amount} />
    </div>
  );
}

export default Expenseitem;
