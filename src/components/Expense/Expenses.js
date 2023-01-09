import React,{ useState} from "react";
import ExpenseFilter from './ExpensesFilter';
import Expenseitem from "./Expenseitem"


const Expense=(props)=>{
     
    const [filteredyear,setExpensefilter]=useState ('2021');

    const filterchangeHandler= selectedyear =>{
        setExpensefilter(selectedyear);
    }

    const filtereditem=props.item.filter((expense)=>{
       return (expense.date.getFullYear().toString()===filteredyear);
    });
  
    

    return (
        <div>
         <ExpenseFilter selected={filteredyear} onchangefilter={filterchangeHandler}/>
        {filtereditem.map(expense=>(
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