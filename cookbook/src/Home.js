import * as React from "react";
import { Link } from "react-router-dom";
// Start missing start error
// npm run
function Home(){
    return (
        <div>
            <nav>
                <ul>
                    <l1><Link to ="/profile">Profile</Link></l1>
                    <l1><Link to ="/settings">Account Settings</Link></l1>
                    <li><a href="/" onClick={() => { /* Log out code here */ }}>Log Out</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;