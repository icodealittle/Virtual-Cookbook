import React, {useState} from "react";
import firebase from "./firebase";
import firebase from 'firebase/app';
import 'firebase/firestore';

async function Register(){
    const [fromData,setFromData] = useState({

        username: "", 
        email: "", 
        password: "", 
        confirmEmail: "", 
        confirmPassword: "",

    });

    const isEmailValid = (email) =>{
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email)
    };

    const isPasswordValid = (password) => {
        if (password.length < 8 || password.length <= 14){
            return false;
        }

        const uniquePassword = new Set(password);
        return uniquePassword.size >= 8 && uniquePassword.size <= 14;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFromData({ ...fromData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (fromData.email !== fromData.confirmEmail) {
            alert("Emails must be match.");
            return;
        };

        if (!isEmailValid(fromData.email)) {
            alert("Please enter a valid email address.");
            return;
        };

        if (fromData.password !== fromData.confirmPassword) {
            alert("Password must be match.");
            return;
        };

        if (!isPasswordValid(fromData.password)){
            alert("Password must be between 8 to 14 characters.");
            return;
        };

        //Function that allow the users to sign-in with either their registered email or username

        const db = firebase.firestore()
        db.collection(users).doc(fromData.username).set({
            email: fromData.email,
        });
    }

    try {
        const userCredentials = await firebase.auth().createUserWithEmailAndPassword(fromData.email, fromData.password);
        const user = userCredentials.user;
        await user.updateProfile({displayName: fromData.username});
        await user.sendEmailVerificationEmail();
        alert("Register successfull. Please verify your email.");
    } catch {
        alert("An error occured. Please try again.");
    };

    return (
    <form onSubmit={handleSubmit}>
        <label>
            Username: <input type = "text" name = "username" value = {FormData.username} onChange = {handleChange} reequired />
        </label>

        <label>
            Email: <input type = "text" name = "email" value = {FormData.email} onChange = {handleChange} reequired />
        </label>

        <label>
            Confirm Email: <input type = "text" name = "confirmEmail" value = {FormData.confirmEmail} onChange = {handleChange} reequired />
        </label>

        <label>
            Password: <input type = "text" name = "password" value ={FormData.password} onChange = {handleChange} required />
        </label>

        <label>
            Confirm Password: <input type = "text" name = "password" value = {FormData.confirmPassword} onChange={handleChange} required />
        </label>
        <button type = "submit"> Register </button>
    </form>
  );

};

export default Register;