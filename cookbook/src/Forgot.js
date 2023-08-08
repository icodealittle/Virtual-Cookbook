import React, { useState} from 'react';
import { sendPasswordResetEmail } from './firebase';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(email);
      setMessage("A link to reset your password has been sent to your email address.");
    } catch (error) {
      setMessage(`Error resetting password: ${error.message}`);
    }
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handlePasswordReset}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Forgot