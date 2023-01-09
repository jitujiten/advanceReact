import "./ExpensesList.css";
import Expenseitem from "./Expenseitem";

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h3 className="expenses-list__fallback">No Expenses found 😔</h3>;
  }

  if (props.item.length === 1) {
    return (
      <div>
        <h3 className="expenses-list__fallback">
          Only single Expense here. Please add more..
        </h3>
        <div className="expenses-list">
          {props.item.map((expense) => (
            <Expenseitem
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
              location={expense.location}
              key={expense.id}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="expenses-list">
      {props.item.map((expense) => (
        <Expenseitem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          location={expense.location}
          key={expense.id}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
