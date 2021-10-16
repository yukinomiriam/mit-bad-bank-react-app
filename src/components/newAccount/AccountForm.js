function AccountForm(props) {
  return (
    <>
      Name: <br />
      <input
        type="input"
        className="form-control"
        id="name"
        placeholder="Enter name"
        value={props.name}
        onChange={props.handleNameChange}
      />
      <br />
      Email Address: <br />
      <input
        type="input"
        className="form-control"
        id="email"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleEmailChange}
      />
      <br />
      Password: <br />
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handlePasswordChange}
      />
      <br />
      <button
        type="submit"
        className="btn brand-button"
        onClick={props.handleCreate}
        disabled={props.isDisabled}
      >
        Create Account
      </button>
      <br />
    </>
  );
}

export default AccountForm;
