import ExpenseForm from "./Expenseform";
import "./NewExpense.css"
const NewExpense=(props)=>{
const saveExpenseHandler=(Enteredexpensedata)=>{
  const alldatafromexpen={
    ...Enteredexpensedata,
    id:Math.random().toString()
  }
  props.ongettingdata(alldatafromexpen);
}
    return (
        <div className="new-expense">
       <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
        </div>
    );
}


export default NewExpense;