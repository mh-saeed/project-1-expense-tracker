import React, { useState } from "react";

export const AddTransactions = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <div className="addTransaction">
      <h3>Add new transaction</h3>
      <form>
        <label htmlFor="text">Text</label>
        <br />
        <input
          placeholder="Enter Text ..."
          type="text"
          id="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <br />
        <label htmlFor="amount">Amount</label>
        <br />
        <label htmlFor="amount">(negative - expense, positive - income)</label>
        <br />
        <input
          placeholder="Enter Amount ..."
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
};
