import React from 'react'
import './PagesStyle.css'
import { useState, useEffect } from 'react'
import Breadcrumb from '../dynamic-components/Breadcrumb';


function Course() {
    const [data, setData] = useState(()=>{
        const savedData = localStorage.getItem('data');
        return savedData !== null  ? Number(savedData):0;
    })
    useEffect(()=>{
        localStorage.setItem('data',(data))
    },[data])
    function changeData(){
        setData(data+1);
    }
    const resetCount = ()=>{
        setData(0)
    }

  return (
    <>
     <Breadcrumb title={"Our Courses"}/>
    <div className='container mx-auto px-6 pt-[80px]'>
       
        <h1><i>Local Storage:</i></h1>
        <ul>
            <li>Creating a To Do List And Storing it in Local Storage of Browser!</li>
        </ul>
        <div className="grid grid-cols-6">
            <div className="col-span-6">
                <h2>JavaScript Local Storage:</h2>
                <h1>{data}</h1>
                <button className='bg-red-700 text-white p-2'  onClick={changeData}>Data is: {data}</button><br /><br />
                <button className='bg-red-700 text-white p-2'   onClick={resetCount}>Reset Data</button>

            </div>
            
        </div>
    </div>
    </>
  )
}

export default Course