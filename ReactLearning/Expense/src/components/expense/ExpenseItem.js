import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function expenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        {/*We can use this when we don't have any content */}
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default expenseItem;
