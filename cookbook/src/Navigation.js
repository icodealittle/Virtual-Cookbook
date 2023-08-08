import React from "react";
import {Link} from "react-router-dom";
import firebase from ".firebase";

const Navigation = () => {
    const handleLogout = () => {
        firebase.auth().signOut();
    };

    return (

        <nav>
            <Link to="/register">Register</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Log Out</button>
        </nav>

    );
};

export default Navigation;