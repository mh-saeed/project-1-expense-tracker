import React from "react";

export const IncomeExpenseBox = () => {
  return (
    <div className="income-container">
      <div className="income">
        <strong>INCOME</strong>
        <br />
        <span>$00.00</span>
      </div>
      <div className="expense">
        <strong>EXPENSE</strong>
        <br />
        <span>$00.00</span>
      </div>
    </div>
  );
};
