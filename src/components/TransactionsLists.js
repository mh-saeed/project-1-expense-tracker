import React from "react";

export const TransactionsLists = () => {
  return (
    <div className="transHist">
      <h3>History</h3>
      <ul>
        <li className="amountGreen">
          Cash<span>-$400</span>
          <button id="deleteButton">X</button>
        </li>
      </ul>
    </div>
  );
};
