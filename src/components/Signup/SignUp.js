import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Creating an user
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    // Fetching the typed email
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    // Fetching the typed password
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    // Fetching the typed confirm password
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    // To show user
    if (user) {
        navigate('/shop');
    }

    // to stop/prevent the reload of the page
    const handleCreateUser = event => {
        event.preventDefault();

        // condition for password
        if (password !== confirmPassword) {
            setError('Password did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 character or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <center><h2 className='form-title'>Sign Up</h2></center>

                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" required />
                </form>

                <p>
                    <span style={{ color: 'rgba(42, 65, 79, 1)' }}>Already have an account?</span> <Link className='form-link' to={'/login'}>Login</Link>
                </p>

                {/* <div>
                    <span className='fancy-or'></span><span>or</span><span className='fancy-or'></span>
                </div> */}
            </div>
        </div>
    );
};

export default SignUp;