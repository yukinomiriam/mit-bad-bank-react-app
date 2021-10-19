import React from "react";
import Card from "../Card";
import AccountForm from "./AccountForm";

import { UserContext } from "../../context";

function Login() {
  const [show, setShow] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus(`Error:  ${label} is required `);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    let isValidUser = findUser(email, password);
    if (isValidUser) {
      setShow(false);
    } else {
      setStatus("Invalid user name or password");
    }
  }

  function findUser(email, password) {
    console.log(email, password);
    let isValid = false;
    ctx.users.forEach((user) => {
      console.log(user.email, user.password);
      if (user.email === email && user.password === password) {
        user.isLogged = "true";
        setName(user.name);
        isValid = true;
      }
    });

    return isValid;
  }

  function handleEmailChange(e) {
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.currentTarget.value)
    ) {
      setStatus("Error: email invalid format");
    } else {
      setStatus("");
    }
    setEmail(e.currentTarget.value);
  }

  const loginForm = (
    <AccountForm
      email={email}
      handleEmailChange={handleEmailChange}
      password={password}
      handlePasswordChange={e => setPassword(e.currentTarget.value)}
      handleSubmit={handleLogin}
      isDisabled={false}
      isNewAccount={false}
      label="Login"
    />
  );

  return (
    <>
    <Card
      header="Login"
      maxWidth="40rem"
      className="card brand-centered brand-margin-top"
      status={status}
      body={
        show ? (  
          loginForm
        ):(
          <>
          <h5>Welcome  {name}</h5>
          
          </>
        )
      }
    />
    </>
  );
}

export default Login;
