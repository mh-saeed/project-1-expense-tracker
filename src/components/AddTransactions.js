import React from "react";

export const AddTransactions = () => {
  return (
    <div className="addTransaction">
      <h3>Add new transaction</h3>
      <form action="">
        <label htmlFor="text">Text</label>
        <br />
        <input placeholder="Enter Text ..." type="text" id="text" />
        <br />
        <label htmlFor="amount">Amount</label>
        <br />
        <label htmlFor="amount">(negative - expense, positive - income)</label>
        <br />
        <input placeholder="Enter Amount ..." type="text" id="amount" />
        <button>Add Transaction</button>
      </form>
    </div>
  );
};
