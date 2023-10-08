import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2023, 7, 14),
    },
    {
        id: 'e2',
        title: 'Pen',
        amount: 94.12,
        date: new Date(2023, 7, 14),
    },
    {
        id: 'e3',
        title: 'New Desk',
        amount: 98.32,
        date: new Date(2023, 7, 14),
    },
    {
        id: 'e4',
        title: 'Notebook',
        amount: 123.12,
        date: new Date(2023, 7, 14),
    }];
const App = () => {

    const [expense, setExpense] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpense((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    }

    return (<div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expense}></Expenses>
        </div>
    );
}

export default App;
