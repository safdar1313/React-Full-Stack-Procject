import { useState , useEffect} from "react";
import axios from "axios";
import Breadcrumb from "../dynamic-components/Breadcrumb";

function About(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:1000/users')
        .then((res)=>{ 
            setData(res.data);
        })
        .catch((error)=>{
            console.log('An error occured while fetching data', error)
        })
    },[])
  return (
    <div>
        <Breadcrumb title={"About Us"}/>
        <div className='container mt-[60px] sm:px-[60px] py-[60px]'>
            <div className="grid grid-cols-3 gap-6">
                <div className="card p-4">
                    <h3>Name: {data[0]?.name}</h3>
                    <p>Email:</p>
                    <i>Message:</i>
                </div>
                <div className="card p-4">
                    <h3>Name: {data[0]?.name}</h3>
                    <p>Email:</p>
                    <i>Message:</i>
                </div>
                <div className="card p-4">
                    <h3>Name:</h3>
                    <p>Email:</p>
                    <i>Message:</i>
                </div>
            </div>
        </div>
   
        <div className='container mt-[60px] sm:px-[60px] '>
        <h2 className="pb-[40px]">The data coming from Data-Base will be Displayed Below:</h2>
            {
                data.map((user)=>(
                    <div className="grid grid-cols-3 gap-6 mb-6">
                        <div className="card p-4">
                            <h3>Name:{user.name}  </h3>
                            <p>Email: {user.email}  </p>
                            <i>Message: {user.message} </i>
                        </div>
                        <div className="card p-4">
                            <h3>Name: {user.name} </h3>
                            <p>Email: {user.email}  </p>
                            <i>Message: {user.message} </i>
                        </div>
                        <div className="card p-4">
                            <h3>Name:{user.name}  </h3>
                            <p>Email: {user.email}  </p>
                            <i>Message: {user.message} </i>
                        </div>
                    </div>
                ))
            }
        </div>        
    </div>
  );
}
export default About;
