import React from 'react'
import './pagesStyle.css'
import Breadcrumb from '../dynamic-components/Breadcrumb';
function Error404() {
  return (
    <>
      <Breadcrumb title={"Page Not Found!"}/>
      <div className='w-full error404 flex items-center '>
        <div className='container tex-center mt-[60px]'>
            <h1 className='text-center text-5xl'>Not Found 404!</h1>

        </div>
      </div>
    </>
  )
}

export default Error404;