import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer bg-red-50 py-12'>
        <div className="container px-[60px]">
            <div className="flex flex-col gap-4 px-4 text-center items-center">
                <div className="footer-logo p-2 border shadow">
                    <Link to={'/#home_banner'}><img src="/logo.png" alt="Our Logo" /></Link>
                </div>
                <h2>Uncover a New Approach to Study</h2>
                <p>Get Viraka now and be part of a community of designers, from <br />freelancers to top Fortune 500 companies.</p>
                <Link to={'/sign-up'}><button className='btn-1 text-center'>Get Started For Free <i className='ml-2 fa fa-arrow-right'></i></button></Link>
            </div>
            <div className="footer-columns pt-10">
                <div className="grid grid-cols-4 px-6">
                    <div className="md:col-span-1 col-span-4 md:py-10 py-4">
                        <h3>Menu</h3>
                        <ul className='pt-2 text-stone-600'>
                            <li><Link to='/' className='hover:text-[var(--secondary-color)]'>Home</Link></li>
                            <li><Link to='/about' className='hover:text-[var(--secondary-color)]'>About Us</Link></li>
                            <li><Link to='/' className='hover:text-[var(--secondary-color)]'>Contact</Link></li>
                            <li><Link to='/' className='hover:text-[var(--secondary-color)]'>Services</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-1 col-span-4 md:py-10 py-4">
                        <h3>Courses</h3>
                        <ul className='pt-2 text-stone-600'>
                            <li>Web Development</li>
                            <li>Web Designing</li>
                            <li>UX Designing</li>
                            <li>UI Designing</li>
                        </ul>
                    </div>
                    <div className="md:col-span-1 col-span-4 md:py-10 py-4">
                    <h3>Services</h3>
                        <ul className='pt-2 text-stone-600'> 
                            <li>Web Development</li>
                            <li>Web Designing</li>
                            <li>UX Designing</li>
                            <li>UI Designing</li>
                        </ul>
                    </div>
                    <div className="md:col-span-1 col-span-4 md:py-10 py-4">
                    <h3>About Us</h3>
                        <ul className='pt-2 text-stone-600'>
                            <li>Web Development</li>
                            <li>Web Designing</li>
                            <li>UX Designing</li>   
                            <li>UI Designing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer