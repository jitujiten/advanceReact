import "./Expenseitem.css";

function Expenseitem() {
const expensedate=new Date().toLocaleDateString()
const LocationOfExpenditure="mumbai"
const expensetitle="car insurance";
const expenseamount=294.54;

  return (
    <div className="expense-item">
      <div>{expensedate}</div>
      <h2>{LocationOfExpenditure}</h2>
      <div className="expense-item_description">
        <h2>{expensetitle}</h2>
      </div>
      <div className="expense-item__price">${expenseamount}</div>
    </div>
  );
}

export default Expenseitem;
