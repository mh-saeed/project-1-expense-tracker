import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransactions } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? `-` : `+`;
  return (
    <li className={transaction.amount < 0 ? `amountRed` : `amountGreen`}>
      {transaction.text}
      <span>{sign + `$` + Math.abs(transaction.amount)}</span>
      <button
        onClick={() => deleteTransactions(transaction.id)}
        id="deleteButton"
      >
        X
      </button>
    </li>
  );
};
