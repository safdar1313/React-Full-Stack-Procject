import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"
import { useState } from 'react'
function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = ()=>{
        setOpenMenu(!openMenu);
    }
  return (
    <div className='border-b border-gray-300 fixed z-20 bg-white w-full'>
            <div className="container ">
                <nav className='grid lg:grid-cols-12 py-4 xl:px-[50px] items-center'>
                    <div className="logo col-span-2">
                        <img src="/React-Full-Stack-Procject/logo.png" alt="Logo" /> 
                    </div>
                    <div className="col-span-2 sm:hidden col-span-3">
                        <button onClick={toggleMenu}><span>{!openMenu? '☰' : '✖'} </span></button>    
                    </div> 
                    <div className="menu flex sm:justify-center md:col-span-7">
                        <ul className={`sm:gap-4 flex flex-col sm:flex-row ${openMenu ? 'block py-[40px]' : 'hidden'} md:inline-flex w-full justify-center`}>
                            <Link to={'/'} className=' sm:p-0 p-2'>Home</Link>
                            <Link to={'/about'} className='sm:border-0 border sm:p-0 p-2 w-100'>About</Link>
                            <Link to={'/course'} className='sm:border-0 border sm:p-0 p-2 w-100'>Course <i class="fa-solid fa-angle-down"></i></Link>
                            <Link to={'/listings'} className='sm:border-0 border sm:p-0 p-2 w-100'>Listings <i class="fa-solid fa-angle-down"></i></Link>
                            <Link to={'/blogs'} className='sm:border-0 border sm:p-0 p-2 w-100'>Blogs </Link>
                            <Link to={'/contact'} className='sm:border-0 border sm:p-0 p-2 w-100'>Contact</Link>
                            <Link to={'/users'} className='sm:border-0 border sm:p-0 p-2 w-100'>Registered Users</Link>
                        </ul>
                    </div>
                    <div className="nav-cta md:col-span-3 max-md:hidden flex justify-end gap-4">
                        <Link to={'/sign-in'}><button className='p-2 sign-in'>Sign In</button></Link>
                        <Link to={'/sign-up'}> <button className='sign-up text-white'>Sign Up</button></Link>
                    </div>
                </nav>
            </div>  
    </div>
  )
}

export default Header