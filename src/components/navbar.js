/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { Menu_itens } from "./Menu_itens";
import "./navbar.css";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };
    render() {
        return (
            <nav className="navbar__ITEMS">
                <h1 className="navbar__logo">CT</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>                </div>
                <ul className="navbar__menu">
                    {Menu_itens.map((item, index) => {
                        return (
                            <li key={index}>
                                <a  href="#" className={item.cName}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </a>
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