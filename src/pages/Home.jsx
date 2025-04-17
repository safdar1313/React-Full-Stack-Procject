import React from 'react'
import './PagesStyle.css';
function Home() {
  return (
    <>
        <div className='banner-section' id='home_banner'>
            <div className='container mt-[60px] sm:px-[60px]'>
                <div className="grid grid-cols-12 ">
                    <div className="sm:col-span-12 lg:col-span-6 sm:pr-6 hero-text lg:pt-[200px] sm:pt-10 sm:p-4">
                        <h1>
                            <span>Smart Study</span> 
                            Where Knowledge Meets the Web
                        </h1> 
                        <p>Lorem ipsum dolor sit amet, consecectur adipisincing elit,
                        consectetur adipsicing elit tempor ut labore.</p>
                        <div className="search-input">
                            <div className="input-field">
                                <form>  
                                    <input type="text" placeholder='Search Your Course Here'/>
                                    <button>Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 hidden lg:block banner-profile pt-20">
                        <img src="/banner.png" alt="Banner Profile" />
                        <div className="home-ps flex">
                            <div className="user-icon bg-indigo-100  flex justify-center items-center">
                                <i className="fa-regular fa-user"></i>
                            </div>
                            <div className="counter">
                                <h2>4500+</h2>
                                <p>Active Students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container fancy-cards-two md:px-[76px] pb-[60px] mt-[-45px]">
        <marquee direction="left" behavior="alternate" scrollamount="10">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-3">
                    <div className="home-ps-2 flex">
                        <div className="bg-indigo-100 user-icon flex justify-center items-center">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="counter">
                            <h2>4500+</h2>
                            <p>Active Students</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="home-ps-2 flex">
                        <div className="user-icon flex bg-violet-100 justify-center items-center">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="counter">
                            <h2>4500+</h2>
                            <p>Active Students</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="home-ps-2 flex">
                        <div className="user-icon bg-indigo-100 flex justify-center items-center">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="counter">
                            <h2>4500+</h2>
                            <p>Active Students</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="home-ps-2 flex">
                        <div className="user-icon bg-indigo-100 flex justify-center items-center">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="counter">
                            <h2>4500+</h2>
                            <p>Active Students</p>
                        </div>
                    </div>
                </div>
            </div>
            </marquee>
        </div>
        <div className="fancy-cards-three">
            <div className="container p-[76px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-8 col-start-3 text-center">
                        <h2>Start your journey With us</h2>
                        <p>We offer a brand new approach to the most basic learning paradigms. Choose from a wide range of learning options and gain new skills! Our school is know.</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 py-[60px]">
                    <div className="col-span-3 cards p-10">
                        <div className="cards-body flex items-center">
                            <div className="user-icon bg-orange-100 flex justify-center items-center">
                                <span className='text-orange-600 font-bold text-xl'>01</span>
                            </div>
                            <h3>Expert
                            Teacher</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit ut labore.</p>
                    </div>
                    <div className="col-span-3 cards p-10">
                        <div className="cards-body flex items-center">
                            <div className="user-icon bg-indigo-100 flex justify-center items-center">
                            <span className='text-indigo-600 font-bold text-xl'>02</span>
                            </div>
                            <h3>Quality
                            Education</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit ut labore.</p>
                    </div>
                    <div className="col-span-3 cards p-10">
                        <div className="cards-body flex items-center">
                            <div className="user-icon bg-rose-100 flex justify-center items-center">
                            <span className='text-rose-950 font-bold text-xl'>03</span>
                            </div>
                            <h3>Remote
                            Learning</h3>
                        </div> 
                        <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit ut labore.</p>
                    </div>
                    <div className="col-span-3 cards p-10">
                        <div className="cards-body flex items-center">
                            <div className="user-icon bg-cyan-100 flex justify-center items-center">
                            <span className='text-blue-400 font-bold text-xl'>04</span>
                            </div>
                            <h3>Life Time
                            Support</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit ut labore.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="fancy-cards-four container px-[76px]">
            <div className="grid grid-cols-12 py-7 mb-10">
                <div className="col-span-6">
                    <img src="/about1.png" alt="About Us" />
                </div>
                <div className="col-span-6 md:pl-5">
                    <h2>We Are Providing The Online Course In Global World</h2>
                    <p>
                        We offer a brand new approach to the most basic learning paradigms. Choose from a wide range of learning options and gain new skills! Our school is know <br /><br /> We offer a brand new approach to the most basic learning paradigms. Choose from a wide range of learning options and gain new skills! Our school is know.
                    </p>
                    <div className="lists flex flex-col items-start gap-4 my-5">
                        <li><i className="fa fa-check"></i><span> Get access to 12,000+ of our top courses</span></li>
                        <li><i className="fa fa-check"></i><span> Popular topic to learn now in our online courses for student</span></li>
                        <li><i className="fa fa-check"></i><span> Find the right instructor for you</span> </li>
                        <button className='btn-1'>View All Courses <i className='fa fa-arrow-right'></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="fancy-cards-five">
            <div className="container p-[76px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-8 col-start-3 text-center">
                        <h2>Find out by popular Categories</h2>
                        <p>We offer a brand new approach to the most basic learning paradigms. Choose from a wide <br /> range of learning options and gain new skills! Our school is know.</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 pt-10">
                    <div className="col-span-12 grid grid-cols-5 gap-4">
                        <div className="col-span-1 logo-cards">
                            <a href="#" className='flex items-center justify-center gap-3 bg-white p-3 border-2 rounded-full hover:bg-[var(--primary-color)]'>
                                <img src="/e3.png" alt="vite logo" className='border-4 rounded-full ' />
                                <p className=''>Digital Marketing</p>
                            </a>
                        </div>
                        <div className="col-span-1 logo-cards">
                            <a href="#" className='flex items-center justify-center gap-3 bg-white p-3 border-2 rounded-full hover:bg-[var(--primary-color)]'>
                                <img src="/e3.png" alt="vite logo" className='border-4 rounded-full ' />
                                <p className=''>Digital Marketing</p>
                            </a>
                        </div>
                        <div className="col-span-1 logo-cards">
                            <a href="#" className='flex items-center justify-center gap-3 bg-white p-3 border-2 rounded-full hover:bg-[var(--primary-color)]'>
                                <img src="/e3.png" alt="vite logo" className='border-4 rounded-full ' />
                                <p className=''>Digital Marketing</p>
                            </a>
                        </div>
                        <div className="col-span-1 logo-cards">
                            <a href="#" className='flex items-center justify-center gap-3 bg-white p-3 border-2 rounded-full hover:bg-[var(--primary-color)]'>
                                <img src="/e3.png" alt="vite logo" className='border-4 rounded-full ' />
                                <p className=''>Digital Marketing</p>
                            </a>
                        </div>
                        <div className="col-span-1 logo-cards">
                            <a href="#" className='flex items-center justify-center gap-3 bg-white p-3 border-2 rounded-full hover:bg-[var(--primary-color)]'>
                                <img src="/e3.png" alt="vite logo" className='border-4 rounded-full ' />
                                <p className=''>Digital Marketing</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-12 grid grid-cols-5 gap-4 py-5">
                        <div className="col-span-1 logo-cards">
                            <a href="#" className='flex items-center justify-center gap-3 bg-white p-3 border-2 rounded-full hover:bg-[var(--primary-color)]'>
                                <img src="/e3.png" alt="vite logo" className='border-4 rounded-full ' />
                                <p className=''>Digital Marketing</p>
                            </a>
                        </div>
                        <div className="col-span-1 logo-cards">
                            <a href="#" className='flex items-center justify-center gap-3 bg-white p-3 border-2 rounded-full hover:bg-[var(--primary-color)]'>
                                <img src="/e3.png" alt="vite logo" className='border-4 rounded-full ' />
                                <p className=''>Digital Marketing</p>
                            </a>
                        </div>
                        <div className="col-span-1 logo-cards">
                            <a href="#" className='flex items-center justify-center gap-3 bg-white p-3 border-2 rounded-full hover:bg-[var(--primary-color)]'>
                                <img src="/e3.png" alt="vite logo" className='border-4 rounded-full ' />
                                <p className=''>Digital Marketing</p>
                            </a>
                        </div>
                        <div className="col-span-1 logo-cards">
                            <a href="#" className='flex items-center justify-center gap-3 bg-white p-3 border-2 rounded-full hover:bg-[var(--primary-color)]'>
                                <img src="/e3.png" alt="vite logo" className='border-4 rounded-full ' />
                                <p className=''>Digital Marketing</p>
                            </a>
                        </div>
                        <div className="col-span-1 logo-cards">
                            <a href="#" className='flex items-center justify-center gap-3 bg-white p-3 border-2 rounded-full hover:bg-[var(--primary-color)]'>
                                <img src="/e3.png" alt="vite logo" className='border-4 rounded-full ' />
                                <p className=''>Digital Marketing</p>
                            </a>
                        </div>
                    </div>                    
                    <div className="col-span-12 flex justify-center gap-5">
                        <div className="w-1/5 logo-cards">
                            <a href="#" className='flex items-center justify-center gap-3 bg-white p-3 border-2 rounded-full hover:bg-[var(--primary-color)]'>
                                <img src="/e3.png" alt="vite logo" className='border-4 rounded-full ' />
                                <p className=''>Digital Marketing</p>
                            </a>    
                        </div>
                        <div className="w-1/5 logo-cards">
                            <a href="#" className='flex items-center justify-center gap-3 bg-white p-3 border-2 rounded-full hover:bg-[var(--primary-color)]'>
                                <img src="/e3.png" alt="vite logo" className='border-4 rounded-full ' />
                                <p className=''>Digital Marketing</p>
                            </a>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="fancy-cards-four container px-[76px]">
            <div className="grid grid-cols-12 py-7 mb-10">
                <div className="col-span-6 md:pl-5">
                    <h2>We Are Providing The Online Course In Global World</h2>
                    <p>
                        We offer a brand new approach to the most basic learning paradigms. Choose from a wide range of learning options and gain new skills! Our school is know <br /><br /> We offer a brand new approach to the most basic learning paradigms. Choose from a wide range of learning options and gain new skills! Our school is know.
                    </p>
                    <div className="lists flex flex-col items-start gap-4 my-5">
                        <li><i className="fa fa-check"></i><span> Get access to 12,000+ of our top courses</span></li>
                        <li><i className="fa fa-check"></i><span> Popular topic to learn now in our online courses for student</span></li>
                        <li><i className="fa fa-check"></i><span> Find the right instructor for you</span> </li>
                        <button className='btn-1'>View All Courses <i className='fa fa-arrow-right'></i></button>
                    </div>
                </div>
                <div className="col-span-6">
                    <img src="/review.png" alt="About Us" />
                </div>
            </div>
        </div>
        <div className="fancy-cards-six">
            <div className="container p-[76px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-8 pb-10">
                        <h2>Courses We Offer</h2>
                        <p>We offer a brand new approach to the most basic learning paradigms. Choose from a wide range of learning options and gain new skills! Our school is know.</p>
                    </div>
                    <div className="col-span-12 flex flex-col md:flex-row gap-6">
                        <div className="card md:w-1/2">
                                <div className="course-card py-[80px] px-10">
                                    <div className="text-white card-body z-10 relative flex flex-col gap-2">
                                        <strong>Build Your Career</strong>
                                        <b>Become an Instructor</b>
                                        <p className='text-white mb-6'>Learn at your own pace, move the between multiple courses.</p>
                                        <button className='btn-1'>Apply Now <i className='fa fa-arrow-right'></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="card md:w-1/2">
                                <div className="course-card-2 py-[80px] px-10">
                                    <div className="text-white card-body z-10 relative flex flex-col gap-2">
                                        <strong>Build Your Career</strong>
                                        <b>Become an Instructor</b>
                                        <p className='text-white mb-6'>Learn at your own pace, move the between multiple courses.</p>
                                        <button className='btn-1'>Apply Now <i className='fa fa-arrow-right'></i></button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-span-12 mt-5 flex flex-col md:flex-row gap-6">
                        <div className="card md:w-1/2">
                            <div className="course-card py-[80px] px-10">
                                <div className="text-white card-body z-10 relative flex flex-col gap-2">
                                    <strong>Build Your Career</strong>
                                    <b>Become an Instructor</b>
                                    <p className='text-white mb-6'>Learn at your own pace, move the between multiple courses.</p>
                                    <button className='btn-1'>Apply Now <i className='fa fa-arrow-right'></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="card md:w-1/2">
                            <div className="course-card-2 py-[80px] px-10">
                                <div className="text-white card-body z-10 relative flex flex-col gap-2">
                                    <strong>Build Your Career</strong>
                                    <b>Become an Instructor</b>
                                    <p className='text-white mb-6'>Learn at your own pace, move the between multiple courses.</p>
                                    <button className='btn-1'>Apply Now <i className='fa fa-arrow-right'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;