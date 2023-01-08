import "./ExpensesFilter.css"

const ExpenseFilter=(props)=>{
   
    const dropdownchangeHandler=(event)=>{
      props.onchangefilter(event.target.value)
    }

  return (
    <div className="expenses_div">
        <div className="expenses_inside_div">
            <label>Filter by year</label>
            <select value={props.selected} onchange={dropdownchangeHandler}>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    </div>
  );

}

export default ExpenseFilter;