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
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expense;
