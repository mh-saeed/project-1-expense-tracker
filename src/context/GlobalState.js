import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  transactions: [
    { id: 1, text: `ice-cream`, amount: -500 },
    { id: 2, text: `Cake`, amount: 100 },
    { id: 3, text: `cream`, amount: 400 },
    { id: 4, text: `chocolate`, amount: -200 },
    { id: 5, text: `lunch`, amount: -300 },
    { id: 6, text: `salary`, amount: 300 },
    { id: 7, text: `tuitions-income`, amount: 300 },
  ],
};

// Creating Context
export const GlobalContext = createContext(initialState);

// Creating Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransactions(id) {
    dispatch({
      type: "Delete_TRANSACTION",
      payload: id,
    });
  }
  function addTransactions(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
