import React, { useState } from "react";
import ExpenseItem from "../expense/ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import "../expense/Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expense = (props) => {
  const [filteredYear, setFilterYear] = useState("2020");

  const dropDownChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          slected={filteredYear}
          onChangeFilter={dropDownChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
