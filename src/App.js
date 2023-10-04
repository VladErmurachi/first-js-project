import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
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
    return (<div>
            <NewExpense/>
            <Expenses items={expenses}></Expenses>
        </div>
    );
}

export default App;
