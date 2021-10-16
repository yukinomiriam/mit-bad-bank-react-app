import { UserContext } from "../../context";
import React from "react";
import Card from "../Card";
import AccountForm from "./AccountForm";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    let errorMessage = "";
    if (!field) {
      errorMessage = `Error:  ${label} is required`;
      errorHandler(errorMessage);
      return false;
    }
    // validate email format
    if (
      label === "email" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(field)
    ) {
      errorMessage = `Error: Email has an invalid format`;
      errorHandler(errorMessage);
      return false;
    }
    // validate password
    if (label === "password" && field.length < 8) {
      errorMessage = `Error: Password should have at least 8 characters`;
      errorHandler(errorMessage);
      return false;
    }
    //console.log(`field: ${field}`);
    //console.log(`label: ${label}`);
    setStatus("");
    return true;
  }

  function errorHandler(message) {
    setStatus(message);
    setTimeout(() => setStatus(""), 2500);
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100, isLogged: "false" });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  function handleNameChange(e) {
    setIsDisabled(false);
    setName(e.currentTarget.value);
    //console.log("N: " + e.currentTarget.value);
    if (e.currentTarget.value === "" && email === "" && password === "")
      setIsDisabled(true);
  }

  function handleEmailChange(e) {
    setIsDisabled(false);
    setEmail(e.currentTarget.value);
    if (name === "" && e.currentTarget.value === "" && password === "")
      setIsDisabled(true);
  }

  function handlePasswordChange(e) {
    setIsDisabled(false);
    setPassword(e.currentTarget.value);
    if (name === "" && email === "" && e.currentTarget.value === "")
      setIsDisabled(true);
  }

  const newAccountForm = (
    <AccountForm
      name={name}
      handleNameChange={handleNameChange}
      email={email}
      handleEmailChange={handleEmailChange}
      password={password}
      handlePasswordChange={handlePasswordChange}
      handleCreate={handleCreate}
      isDisabled={isDisabled}
    />
  );

  return (
    <Card
      header="Create Account"
      status={status}
      body={
        show ? (
          newAccountForm
        ) : (
          <>
            <h5>Success</h5>
            <button
              type="submit"
              className="btn brand-button"
              onClick={clearForm}
            >
              Add another account
            </button>
            <br />
          </>
        )
      }
    />
  );
}

export default CreateAccount;
