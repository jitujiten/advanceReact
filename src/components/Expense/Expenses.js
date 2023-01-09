
import Expenseitem from "./Expenseitem"

const Expense=(props)=>{
    
  
    return (
        <div>
        {props.item.map(expense=>(
            <Expenseitem
             title= {expense.title}
             date= {expense.date}
             amount= {expense.amount}
             location={expense.location}
             key={expense.id}
             
            />
          ))}
        </div> 
    );
}

export default Expense;