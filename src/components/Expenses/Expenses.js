import './Expenses.css';

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = React.useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            < Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesList items = {filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;