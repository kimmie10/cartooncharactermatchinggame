import React from "react";
import "./nav.css";

const Nav = (props) => (
    <nav className="navbar">
    <ul>
        <li className="App-logo">
        <a href="/">80's Cartoon Click</a>
        </li>
        <li className="msg">{props.msg}</li>
        <li className="scores">Score: {props.score} | Top Score: {props.topScore}
        </li>
    </ul>
    </nav>
);

export default Nav;