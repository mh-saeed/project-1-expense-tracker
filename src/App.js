import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenseBox } from "./components/IncomeExpenseBox";
import { TransactionsLists } from "./components/TransactionsLists";
import { AddTransactions } from "./components/AddTransactions";

function App() {
  return (
    <div className="mainDiv">
      <Header />
      <Balance />
      <IncomeExpenseBox />
      <br />
      <TransactionsLists />
      <br />
      <AddTransactions />
    </div>
  );
}

export default App;
