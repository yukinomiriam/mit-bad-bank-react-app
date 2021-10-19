import CurrencyFormat from "react-currency-format";

function AccountBalanceForm(props) {
  return (
    <>
      <div className="balance-container">
        <div className="balance-title">
          <h5>Balance: </h5>
        </div>
        <div className="balance-amount">
          <h5>
            <CurrencyFormat
              value={props.total.toFixed(2)}
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
          <label> {props.label} Amount:</label>
        </div>
        <div className="amount-container">
          <input
            id="amtDeposit"
            placeholder="0"
            className="form-control amount-input"
            onChange={props.validateTransaction}
          ></input>
        </div>
      </div>
      <br />
      <div className="container my-3">
        <div className="col-md-12 text-center">
          <button
            type="submit"
            className="btn brand-button"
            onClick={props.handleSubmit}
            disabled={!props.validTransaction}
          >
            {props.label}
          </button>
        </div>
      </div>
    </>
  );
}

export default AccountBalanceForm;
