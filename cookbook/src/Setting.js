import React, { useState } from "react";
import { auth, storage } from "./firebase";

const Setting = () =>{
    const user = auth.currentUser();
    const [fromData, setFromData] = useState ({
        username: user.displayName, 
        email: user.email, 
        password: "", 
        profilePics: null,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFromData({ ... fromData, [name]: value });
    }

    const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFromData({ ...fromData, profilePics: file });
  };

  const updateUsername = async () => {
    try {
      await user.updateProfile({
        displayName: fromData.username,
      });
      alert('Username updated successfully.');
    } catch (error) {
      alert('An error occurred while updating the username.');
    }
  };

  const updateEmail = async () => {
    try {
      await user.updateEmail(fromData.email);
      alert('Email updated successfully.');
    } catch (error) {
      alert('An error occurred while updating the email.');
    }
  };

  const updatePassword = async () => {
    try {
      await user.updatePassword(fromData.newPassword);
      alert('Password updated successfully.');
    } catch (error) {
      alert('An error occurred while updating the password.');
    }
  };

  const updateProfilePicture = async () => {
    try {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(`profilePics/${user.uid}`);
      await fileRef.put(fromData.profilePics);
      const profilePictureURL = await fileRef.getDownloadURL();

      await user.updateProfile({
        photoURL: profilePictureURL,
      });

      alert('Profile picture updated successfully.');
    } catch (error) {
      alert('An error occurred while updating the profile picture.');
    }
  };

  return (
    <form>
      <label>
        Username:
        <input type="text" name="username" value={fromData.username} onChange={handleChange} />
        <button type="button" onClick={updateUsername}>Update Username</button>
      </label>
      <label>
        Email:
        <input type="email" name="email" value={fromData.email} onChange={handleChange} />
        <button type="button" onClick={updateEmail}>Update Email</button>
      </label>
      <label>
        New Password:
        <input type="password" name="newPassword" value={fromData.newPassword} onChange={handleChange} />
        <button type="button" onClick={updatePassword}>Update Password</button>
      </label>
      <label>
        Profile Picture:
        <input type="file" onChange={handleFileChange} />
        <button type="button" onClick={updateProfilePicture}>Update Profile Picture</button>
      </label>
    </form>
  );
};

export default Setting;