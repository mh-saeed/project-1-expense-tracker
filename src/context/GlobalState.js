import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  transaction: [
    { id: 1, text: `ice-cream`, amount: 500 },
    { id: 2, text: `Cake`, amount: 100 },
    { id: 3, text: `cream`, amount: 400 },
    { id: 4, text: `chocolate`, amount: 200 },
    { id: 5, text: `ice`, amount: 300 },
  ],
};

// Creating Context
export const GlobalContext = createContext(initialState);

// Creating Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transaction: state.transaction }}>
      {children}
    </GlobalContext.Provider>
  );
};
