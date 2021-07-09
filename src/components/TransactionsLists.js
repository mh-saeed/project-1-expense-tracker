import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionsLists = () => {
  const { transactions } = useContext(GlobalContext);
  // console.log(transactions);
  return (
    <div className="transHist">
      <h3>History</h3>
      <ul className="scrollExpense">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
