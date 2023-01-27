/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { Menu_itens } from "./Menu_itens";
import "./navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar__ITEMS">
                <h1 className="navbar__logo">LOGO</h1>
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
                </ul>
            </nav>
        );
    }
}
export default Navbar;