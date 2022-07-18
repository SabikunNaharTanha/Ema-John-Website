import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate('/shop');
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }



    return (
        <div className='form-container'>
            <div>
                <center><h2 className='form-title'>Login</h2></center>

                <form onSubmit={handleUserSignIn}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" required />
                    </div>

                    <p>{error?.message}</p>
                    {
                        loading && <p style={{ color: 'orangered' }}>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" required />
                </form>

                <p>
                    <span style={{ color: 'rgba(42, 65, 79, 1)' }}>New to Ema-John?</span> <Link className='form-link' to={'/signup'}>Create an account</Link>
                </p>

                <div>
                    <span className='fancy-or'></span><span>or</span><span className='fancy-or'></span>
                </div>
            </div>
        </div>
    );
};

export default Login;