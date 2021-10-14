import { UserContext } from "../context";
import React from "react";
import Card from "./Card";
import CurrencyFormat from "react-currency-format";

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
    if(amount > total){
      let newTotal = total;
      errorHandler(`Error: You cannot withdraw more than ${(newTotal).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })}`);
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

  return (
    <>
      <Card
        header="Withdraw"
        status={status}
        successFlag={isSuccess}
        body={
          <>
            <div className="balance-container">
              <div className="balance-title">
                <h5>Balance: </h5>
              </div>
              <div className="balance-amount">
                <h5>
                  <CurrencyFormat
                    value={total.toFixed(2)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </h5>
              </div>
            </div>
            <br />
            <div className="balance-container">
              <div className="label-title">
                <label> Withdraw Amount:</label>
              </div>
              <div className="amount-container">
                <input
                  id="amtDeposit"
                  placeholder="0"
                  className="form-control amount-input"
                  onChange={validateWithdraw}
                ></input>
              </div>
            </div>
            <br />
            <div className="container my-3 bg-light">
              <div className="col-md-12 text-center">
                <button
                  type="submit"
                  className="btn brand-button"
                  onClick={handleSubmit}
                  disabled={!validTransaction}
                >
                  Withdraw
                </button>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}

export default Withdraw;
