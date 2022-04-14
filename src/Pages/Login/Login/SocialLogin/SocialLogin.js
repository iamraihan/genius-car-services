import React from 'react';
import google from '../../../../images/social/google-logo-9808.png'
import facebook from '../../../../images/social/facebook.png'
import github from '../../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const navigate = useNavigate()

    let errorElement;
    if (loading || loadingGit) {
        return <Loading></Loading>
    }
    if (error || errorGit) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}{errorGit?.message}</p>
        </div>
    }
    if (user || userGit) {
        navigate('/')
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mb-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 mx-auto d-block my-2'> <img style={{ height: '30px' }} src={google} alt="" /> <span className='px-2'> Google Sign In</span>
                </button>
                <button className='btn btn-primary w-50 mx-auto d-block my-2'> <img style={{ height: '30px' }} src={facebook} alt="" /> <span className='px-2'> Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary w-50 mx-auto d-block my-2'> <img style={{ height: '30px' }} src={github} alt="" /> <span className='px-2'> Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;