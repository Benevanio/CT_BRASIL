/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Menu_itens } from "./Menu_itens";
import "./navbar.css";
import Logo from "../IMG/Logo1.gif";
import { Link } from "react-router-dom";
class Navbar extends Component {
    

    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };
    render() {
        return (
            <nav className="navbar__ITEMS">
                <h1 className="navbar__logo">
                    <img src={Logo} alt="Logo" />
                </h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>                </div>
                <ul className={this.state.clicked ? "navbar__menu active" : "navbar__menu"}>
                    {Menu_itens.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link  to={item.url} className={item.cName}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        )

                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        );
    }
}
export default Navbar;