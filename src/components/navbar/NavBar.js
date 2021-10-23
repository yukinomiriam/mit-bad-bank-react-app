import React from "react";
import { MenuItems } from "./MenuItems";

function NavBar() {
  const handleClick = (e) => {
    let targetEl = e.currentTarget;
    let link = targetEl.getElementsByClassName("nav-link")[0];
    let currentlyActive = Array.from(
      document.getElementsByClassName("brand-active")
    );
    currentlyActive.forEach((el) => el.classList.remove("brand-active"));
    link.classList.add("brand-active");
    console.log("Menu: " + MenuItems);
  };

  const pageUrl = window.location.hash;

  const activeItem = {
    home: pageUrl === "#/" ? " brand-active" : "",
    createAccount: pageUrl === "#/CreateAccount/" ? " brand-active" : "",
    login: pageUrl === "#/Login/" ? " brand-active" : "",
    deposit: pageUrl === "#/Deposit/" ? " brand-active" : "",
    withdraw: pageUrl === "#/Withdraw/" ? " brand-active" : "",
    allData: pageUrl === "#/AllData/" ? " brand-active" : "",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="p-3">
        <img src="bad-bank-3d-logo.png" alt="BadBank" width="65px" />
        <a className="navbar-brand brand-text" href="#/" title="Home Page">
          BadBank
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {MenuItems.map(function (item, index) {
            return (
              <li
                className="nav-item px-3"
                key={index}
                onClick={(e) => handleClick(e)}
                id={index}
              >
                <a
                  className={"nav-link" + activeItem[item.id]}
                  href={item.url}
                  title={item.title}
                  data-toggle="tooltip"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
