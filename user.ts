import { useState } from 'react';
import { loginUser, resetPassword, signUpUser, verifyEmail } from './api';

const UserFunction: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLogin = () => {
    loginUser(email, password)
      .then((response) => {
        // Handle successful login
        console.log(response.data);
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
      });
  };

  const handleResetPassword = () => {
    resetPassword(resetEmail)
      .then((response) => {
        // Handle password reset email sent
        console.log(response.data);
      })
      .catch((error) => {
        // Handle reset password error
        console.error(error);
      });
  };

  const handleSignUp = () => {
    signUpUser(signupEmail, signupPassword)
      .then((response) => {
        // Handle successful sign up
        console.log(response.data);
      })
      .catch((error) => {
        // Handle sign up error
        console.error(error);
      });
  };

  const handleEmailVerification = () => {
    verifyEmail(email)
      .then((response) => {
        // Handle email verification success
        console.log(response.data);
      })
      .catch((error) => {
        // Handle email verification error
        console.error(error);
      });
  };

  return (
    // <>
    //   <div>
    //     <h2>Login</h2>
    //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    //     <button onClick={handleLogin}>Login</button>
    //   </div>

    //   <div>
    //     <h2>Reset Password</h2>
    //     <input type="email" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} placeholder="Email" />
    //     <button onClick={handleResetPassword}>Reset Password</button>
    //   </div>

    //   <div>
    //     <h2>Sign Up</h2>
    //     <input type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} placeholder="Email" />
    //     <input type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} placeholder="Password" />
    //     <button onClick={handleSignUp}>Sign Up</button>
    //   </div>

    //   <div>
    //     <h2>Email Verification</h2>
    //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    //     <button onClick={handleEmailVerification}>Verify Email</button>
    //   </div>
    // </>
};
