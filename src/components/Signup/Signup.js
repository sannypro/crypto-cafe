import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../Assets/Image/google.svg";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../Firebase/Firebase.init";
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { async } from "@firebase/util";

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(
    auth
  );
  const [error, setError] = useState('')
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    hookError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  };
  const handleEmailChange = e => {
    setEmail(e.target.value)
  };
  const handleConfirmPass = e => {
    setConfirmPassword(e.target.value)
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setError('password Mismacthed')
      return
    }
    createUserWithEmailAndPassword(email, password);
    await sendEmailVerification(auth)
    alert('Sent email');

  }



  const navigate = useNavigate();

  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input onChange={handleEmailChange} type='email' name='email' id='email' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input onChange={handlePasswordChange} type='password' name='password' id='password' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <div className='input-wrapper'>
              <input
                onChange={handleConfirmPass}
                type='password'
                name='confirmPassword'
                id='confirm-password'
              />
            </div>
          </div>
          <p style={{ color: 'red' }}>{error}</p>
          <button type='submit' className='auth-form-submit'>
            Sign Up
          </button>
        </form>

        <p className='redirect'>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button className='google-auth'>
            <img src={GoogleLogo} alt='' />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
