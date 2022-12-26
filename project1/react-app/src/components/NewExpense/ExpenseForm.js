import { useState } from "react";
import "../style/ExpenseForm.css";
export default function ExpenseForm({ onSaveExpenseData }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  const TitleChange = (e) => {
    setTitle(e.target.value);
  };
  const AmountChange = (e) => {
    setAmount(e.target.value);
  };
  const DateChange = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };
    onSaveExpenseData(expenseData);
    setAmount("");
    setTitle("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={title} onChange={TitleChange} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={AmountChange}
          />
        </div>
        <div value={date} className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            value={date}
            onChange={DateChange}
          />
        </div>
      </div>

      <div className="new-expense__actions ">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
