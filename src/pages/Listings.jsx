import React from 'react'

function Listings() {
  
  
  return (
    <div className='container text-center justify-center flex flex-col h-[90vh]'>
        <i>An Internal Error Has Occured!</i>
        <p>Please Contact Hosting Provider</p>
        <button onClick={()=>alert("Please contact hosting Provider  We are unable to show err")}>See Error</button>
    </div>
  )
}

export default Listings