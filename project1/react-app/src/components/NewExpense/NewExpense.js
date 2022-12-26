import ExpenseForm from "./ExpenseForm";
import "../style/NewExpense.css";
import { v4 } from "uuid";
export default function NewExpense({ onAddExpense }) {
  const onSaveExpenseDataHanderler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: v4(),
    };
    onAddExpense(expenseData);
    console.log(enteredExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHanderler} />
    </div>
  );
}
