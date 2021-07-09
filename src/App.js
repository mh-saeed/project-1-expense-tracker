import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenseBox } from "./components/IncomeExpenseBox";
import { TransactionsLists } from "./components/TransactionsLists";
import { AddTransactions } from "./components/AddTransactions";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpenseBox />
      <br />
      <TransactionsLists />
      <br />
      <AddTransactions />
    </GlobalProvider>
  );
}

export default App;
