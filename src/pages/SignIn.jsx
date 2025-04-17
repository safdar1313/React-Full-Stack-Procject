import React from 'react'
import Breadcrumb from '../dynamic-components/Breadcrumb';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';

function SignIn() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [errLogin, setErrLogin] = useState('');
    const navigate = useNavigate();
    function handleLogin(e){
        e.preventDefault();
        axios.post("http://localhost:1000/login", {name,email})
        .then((res)=>{
            if(res.data){
                setErrLogin();
                navigate('/')
            }
            else{
                setErrLogin();
            }
        })
        .catch((error)=>{
            setErrLogin("Invalid Credentials*");
                pswdInput.current.focus();
                setEmail('');
        })
    }
    const pswdInput = useRef(null);
  return (
    <div className='signin'>
        <Breadcrumb title={"Sign in to your account"}/>
        <div className="container">
            <div className="w-[600px] mx-auto pt-[100px] p-10 height-[100vh]">
                <form className="space-y-4 mb-10 bg-white" action={"#"} onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
                        <input
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
                        <input
                        ref={pswdInput}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                        type="submit"
                        className="w-full btn-2 rounded-md"
                        >
                        Sign In
                        </button>
                        {errLogin && (
                            <p className='text-red-900 fw-bold text-left'>{errLogin}</p>
                        )}
                    </div>
                    <p>Don't have an account? <Link to={'/sign-up'} className='text-[var(--secondary-color)] hover:text-[var(--primary-color)]'>Sign Up</Link> </p>
                </form>
            </div>
        </div>
    </div>
  )
}
export default SignIn;