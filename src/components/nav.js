import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/About">
                <div>About</div>
            </Link>
            <Link to="/Stocks/:symbol">
                <div>Stocks</div>
            </Link>
            <Link to="/Stocks">
                <div>Dashboard</div>
            </Link>
        </div>
    );
};

export default Nav;