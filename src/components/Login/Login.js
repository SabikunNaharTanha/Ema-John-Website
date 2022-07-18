import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <center><h2 className='form-title'>Login</h2></center>

                <form>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>

                <p>
                    <span style={{ color: 'rgba(42, 65, 79, 1)' }}>New to Ema-John?</span> <Link className='form-link' to={'/signup'}>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;