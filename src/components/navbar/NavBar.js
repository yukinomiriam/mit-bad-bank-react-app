import React, { Component } from "react";
import { MenuItems } from "./MenuItems";

class NavBar extends Component {
  state = { activeIndex: 0 };
  handleClick = (index) => {
    //console.log("index" + index);
    let activeIndex = this.state.activeIndex === index ? index : index;
    //console.log("activeIndex: " + activeIndex);
    this.setState({activeIndex});
    
  };
    
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="p-3">
          <img src="bank-logo-black.png" alt="BadBank" width="65px" />
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
            {MenuItems.map((item, index) => {
              return (
                <li className="nav-item px-3" key={index} onClick={this.handleClick.bind(this, index)} id={index}>
                  <a className={this.state.activeIndex === index ? "nav-link brand-active " : "nav-link"}  href={item.url}  title={item.title}> 
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
}

export default NavBar;
