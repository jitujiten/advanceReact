
import Expenseitem from "./Expenseitem"

const Expense=()=>{
    const expenses = [
        {
          id: "e1",
          title: "Toilet Paper",
          amount: 94.12,
          date: new Date(2020, 7, 14),
          location:"mumbai"
        },
        { id: "e2",
         title: "New TV", 
         amount: 799.49,
        date: new Date(2021, 2, 12),
        location:"kolkata" 
        },
        {
          id: "e3",
          title: "Car Insurance",
          amount: 294.67,
          date: new Date(2021, 2, 28),
          location:"banglore"
        },
        {
          id: "e4",
          title: "New Desk (Wooden)",
          amount: 450,
          date: new Date(2021, 5, 12),
          location:"odisha"
        }
      ]; 

    return (
        <div>
        {expenses.map(expense=>(
            <Expenseitem
             title= {expense.title}
             date= {expense.date}
             amount= {expense.amount}
             location={expense.location}
            />
          ))}
        </div> 
    );
}

export default Expense;