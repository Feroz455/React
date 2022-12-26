import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "../style/ExpenseItem.css";
export default function ExpenseItem({
  expenseDate,
  expenseTitle,
  expenseAmount,
}) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expenseDate} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">
            ${expenseAmount.toString().padStart(6, "0")}
          </div>
        </div>
      </Card>
    </li>
  );
}
