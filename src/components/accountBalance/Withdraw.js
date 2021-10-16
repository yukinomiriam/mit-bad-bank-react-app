import { UserContext } from "../../context";
import React from "react";
import Card from "../Card";
import AccountBalanceForm from "./AccountBalanceForm";

function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [validTransaction, setValidTransaction] = React.useState(false);
  const [total, setTotal] = React.useState(ctx.users[0].balance);
  const [amount, setAmount] = React.useState(0);
  const [status, setStatus] = React.useState("");
  const [isSuccess, setIsSuccess] = React.useState(false);
  const validateWithdraw = (event) => {
    let amt = event.target.value;
    //console.log("event: " + amt);
    if (amt !== "" && (Number(amt) <= 0 || amt === "-")) {
      errorHandler("Error: Invalid amount");
      setIsSuccess(false);
      return setValidTransaction(false);
    }

    if (amt !== "" && amt !== "-" && !Number(amt)) {
      errorHandler("Error: Please introduce numbers only");
      setIsSuccess(false);
      return setValidTransaction(false);
    }

    if (amt === "") {
      return setValidTransaction(false);
    }

    setStatus("");
    setValidTransaction(true);
    setAmount(Number(amt));
  };

  function errorHandler(message) {
    setStatus(message);
    setTimeout(() => setStatus(""), 3500);
  }

  const handleSubmit = (event) => {
    let newTotal = total - amount;
    if (amount > total) {
      let newTotal = total;
      errorHandler(
        `Error: You cannot withdraw more than ${newTotal.toLocaleString(
          "en-US",
          {
            style: "currency",
            currency: "USD",
          }
        )}`
      );
      setIsSuccess(false);
      return setValidTransaction(false);
    }

    setTotal(newTotal);
    setValidTransaction(false);
    updateUserBalance(newTotal);
    setIsSuccess(true);
    errorHandler("Success: Your withdrawal has been completed");
    event.preventDefault();
  };

  /* function that updates the total balance*/
  function updateUserBalance(newTotal) {
    ctx.users[0].balance = newTotal;
  }

  const accountWithdrawComponent = (
    <AccountBalanceForm
      label="Withdraw"
      total={total}
      validateTransaction={validateWithdraw}
      handleSubmit={handleSubmit}
      validTransaction={validTransaction}
    />
  );

  return (
    <>
      <Card
        header="Withdraw"
        status={status}
        successFlag={isSuccess}
        body={accountWithdrawComponent}
      />
    </>
  );
}

export default Withdraw;
