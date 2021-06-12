import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function expenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      {/*We can use this when we don't have any content */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default expenseItem;
