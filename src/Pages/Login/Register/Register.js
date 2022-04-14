import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate()
    const [agree, setAgree] = useState(false)
    const navigateLogin = event => {
        navigate('/login')
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    if (user || updating) {
        return <Loading></Loading>
    }
    if (user) {
        console.log('user', user);
    }
    const submitRegisterHandler = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        // const agree = event.target.terms.checked 

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/')

    }
    return (
        <div className='form-register'>
            <h2 className='text-center m-5'>Please Register</h2>
            <form onSubmit={submitRegisterHandler}>
                <input type="text" placeholder='Name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms and condition genius car service</label>
                <input disabled={!agree} className='btn btn-primary w-50 d-block mx-auto' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;