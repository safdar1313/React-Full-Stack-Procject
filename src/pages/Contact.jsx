import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../dynamic-components/Breadcrumb";
import axios from "axios";
import { useEffect } from "react";


const Contact = () => {
   const navigate = useNavigate();
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
   const [message, setMessage] = useState('');
   const handleData =  (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/signup", {name,email,message})
        .then(()=>{
          alert("Successfuly Form Submited!")
          confirm("Do you wanna go home page?")
          navigate('/')
        })
        .catch((err)=>{
          alert("An Error Occured", err)
        })
   }

   // Getting Data From Backend
   const [data, setData] = useState([]);
   useEffect(()=>{
    axios.get('http://localhost:5000/coming')
    .then((res)=>{
      setData(res.data);
    })
    .catch((err)=>{
      console.log('An Error Occured While fetching Data', err)
    })
   },[])
  return (
    <>
    <div className="contact w-full">
      <Breadcrumb title={"Contact Us"}/>
      <div className="w-[1000px] mx-auto p-10">
        <h2 className="text-center pb-10 capitalize">Fill Up the form to get a free quote!</h2>
      <form className="space-y-6 mb-10 bg-white" action={"#"} onSubmit={handleData}>
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
            <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
            <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
            <textarea
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              id="message"
              name="message"
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
        </form>
      </div>
    </div>
    <div className="second-section">
      <div className="container px-[60px] pb-[60px]">
        <div className="grid grid-cols-3 gap-6">
          {
            data.map((user)=> (
              <div className="card p-6">
                <h3>{user.name} </h3>
                <i> {user.email}</i>
                <p>{user.message}</p>
              </div>
             ))
            }

        </div>
      </div>
    </div>
    </>
  );
};

export default Contact; 