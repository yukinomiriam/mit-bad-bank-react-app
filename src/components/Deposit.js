import { UserContext } from "../context";
import React from "react";
import Card from "./Card";
import CurrencyFormat from "react-currency-format";

function Deposit() {
  const ctx = React.useContext(UserContext);
  const [validTransaction, setValidTransaction] = React.useState(false);
  const [total, setTotal] = React.useState(ctx.users[0].balance);
  const [amount, setAmount] = React.useState(0);
  const [status, setStatus] = React.useState("");

  const validateDeposit = (event) => {
    let amt = event.target.value;
    console.log("event: " + amt);
    if (amt !== "" && Number(amt) <= 0) {
      errorHandler("Error: Invalid amount");
      return setValidTransaction(false);
    }

    if (amt !== "" && !Number(amt)) {
      errorHandler("Error: Please introduce numbers only");
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
    setTimeout(() => setStatus(""), 3000);
  }

  const handleSubmit = (event) => {
    let newTotal = total + amount;
    setTotal(newTotal);
    setValidTransaction(false);
    event.preventDefault();
    updateUserBalance(newTotal);
  };

  /* function that updates the total balance*/
  function updateUserBalance(newTotal) {
    ctx.users[0].balance = newTotal;
  }

  return (
    <>
      <Card
        header="Deposit"
        status={status}
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
                <label> Deposit Amount:</label>
              </div>
              <div className="amount-container">
                <input
                  id="amtDeposit"
                  placeholder="0"
                  className="form-control amount-input"
                  onChange={validateDeposit}
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
                Submit Deposit
              </button>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}

export default Deposit;
