import { useState } from 'react';
import Header from './Header';

const Login = () => {

    const [isSignUpForm, setIsSignUpForm] = useState(false);

    const toggleIsSignUp = () => {
        setIsSignUpForm(!isSignUpForm);
    }

    return (
        <div>
            <Header />
            <img className='absolute'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                alt='home-page-background'
            />
            <form className='absolute w-3/12 px-12 py-4 bg-black mx-auto left-0 right-0 my-32 text-white opacity-85 rounded-md'>
                <h1 className='text-xl font-semibold my-5'>{isSignUpForm ? "Sign Up" : "Sign In"}</h1>
                {isSignUpForm &&
                    <input
                        className='w-full bg-gray-900 px-3 py-2 my-2 rounded-sm'
                        type='text'
                        placeholder='Full Name'
                    />
                }
                <input
                    className='w-full bg-gray-900 px-3 py-2 my-2 rounded-sm'
                    type='email'
                    placeholder='Email Address'
                />
                <input
                    className='w-full bg-gray-900 px-3 py-2 my-2 rounded-sm'
                    type='password'
                    placeholder='Password'
                />
                <button className='w-full py-2 bg-red-700 my-6 rounded-sm'>
                    {isSignUpForm ? "Sign Up" : "Sign In"}
                </button>

                <p className='mt-8 my-4'> {isSignUpForm ? "Already a member?" : "New to Netflix?"} <span className='text-blue-700 underline cursor-pointer' onClick={toggleIsSignUp}>
                    {isSignUpForm ? "Sign Up" : "Sign In"}
                </span>
                </p>
            </form>

        </div>
    )
}

export default Login;