import React from 'react'
import Breadcrumb from '../dynamic-components/Breadcrumb'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import axios from 'axios'
import { useRef } from 'react'
function SignUp() {
    let [name,setName] = useState('');
    let [email,setEmail] = useState('');
    let [message,setMessage] = useState('');
    const navigate = useNavigate();
    const focusName = useRef(null);
    function submitInfo(e){
        e.preventDefault()
        axios.post("http://localhost:1000/sign-up",{name,email,message})
        .then(()=>{
          // navigate('/');
          focusName.current.focus();
          setEmail('');
          setName('');
          setMessage('');
        })
        .catch((error)=>
        {
            console.log("An Error has occured while sending the data", error)
            navigate('/ksdjf')
        })
    }

  return (
    <div className='signup'>
        <Breadcrumb title={"Create Your New Account!"}/>
        <div className="w-[600px] mx-auto p-10">
      <form className="space-y-6 my-[55px] bg-white" action={"#"} onSubmit={submitInfo}>
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
            <input
              ref={focusName}
              type="text"
              id="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              placeholder="Write your message here"
              rows="4"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full btn-2 rounded-md"
            >
              Send Message
            </button>
          </div>
          <p>Have an existing account? <Link to={'/sign-in'} className='text-[var(--secondary-color)] hover:text-[var(--primary-color)]'>Sign In</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp