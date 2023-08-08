import React, {useState} from 'react';
import firebase from "./firebase";

const SignIn = async () => {
    const [fromData, setFromData] = useState({
        userIdentifier: "", //email or username
        password: "",
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFromData({ ... fromData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let email = fromData.userIdentifier;
        if (!email.includes("@")){
            const db = firebase.firestore();
            const userDocument = await db.collection("users").doc(email).get();
            email = userDocument.data().email;
        }

        try {
            await firebase.auth().signInWithEmailAndPassword(email, fromData.password);
            alert("Sign in successful.");
        } catch (error) {
            alert("An error occured. Please try again.")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username or Email:
                <input type="text" name="userIdentifier" value={fromData.userIdentifier} onChange={handleChange} required />
            </label>

            <label>
                Password: 
                <input type="password" name="password" value={fromData.password} onChange={handleChange} required />
            </label>
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;

