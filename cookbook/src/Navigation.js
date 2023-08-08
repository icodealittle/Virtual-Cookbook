import React from "react";
import {Link} from "react-router-dom";
import firebase from ".firebase";

const Navigation = () => {
    const handleLogout = () => {
        firebase.auth().signOut();
    };

    return (

        <nav>
            <Link to = "/profile"> Profile</Link>
            <Link to = "/account">Setting</Link>
            <button onClick={handleLogout}>Log Out</button>
        </nav>

    );
};

export default Navigation;