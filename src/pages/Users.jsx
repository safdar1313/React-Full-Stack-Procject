import React, { useEffect, useState } from 'react';
import './pagesStyle.css';
import axios from 'axios';
import Breadcrumb from '../dynamic-components/Breadcrumb'

function Users() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1000/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log('No data Found!', err);
      });
  }, []);

  return (
    <div className='users pt-[80px]' >
      <Breadcrumb title={"Users Stored in Data Base"} />
      <marquee behavior="slide" direction="left">

      </marquee>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container py-[60px] px-[60px]">
        
        {userData.map((user, index) => (
          <div className="card bg-white shadow-md rounded-lg p-4" key={index}>
            <div className="card-body space-y-2">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Message:</strong> {user.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
