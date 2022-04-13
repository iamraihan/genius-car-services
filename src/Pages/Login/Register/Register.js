import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()
    const navigateLogin = event => {
        navigate('/login')
    }
    const submitRegisterHandler = event => {
        event.preventDefault()
    }
    return (
        <div className='form-register'>
            <h2 className='text-center m-5'>Please Register</h2>
            <form onSubmit={submitRegisterHandler}>
                <input type="text" placeholder='Name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Register;