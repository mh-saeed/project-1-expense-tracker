import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenseBox = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="income-container">
      <div className="income">
        <strong>INCOME</strong>
        <br />
        <span>${income}</span>
      </div>
      <div className="expense">
        <strong>EXPENSE</strong>
        <br />
        <span>${expense}</span>
      </div>
    </div>
  );
};
