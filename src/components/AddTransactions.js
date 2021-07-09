import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransactions = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransactions } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransactions(newTransaction);
  };

  return (
    <div className="addTransaction">
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="text">Text</label>
        <br />
        <input
          placeholder="Enter Text . . ."
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
