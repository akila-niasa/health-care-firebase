import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { FaUserCircle,FaHistory } from 'react-icons/fa';
import{BsCurrencyDollar}from 'react-icons/bs'

const ServiceDetails = () => {
  const { id } = useParams();


 const[service,setService]=useState([])
 const [current,setCurrent]=useState([])
 useEffect(()=>{
 fetch('https://raw.githubusercontent.com/akila-niasa/data/main/data.json')
   .then(res=>res.json())
   .then(data=>setService((data)))
 },[id])
 useEffect(()=>{
  if(service.length>0){
      const wedding = service.find(s => s.id == id)
  setCurrent(wedding)
  }
},[service,id])
const submitForm = event => {
  event.preventDefault()
  toast.success('Thanks For Booking!')
}
  return (
    <div className='container'>
    <div className='row'>
    <div className='mt-20 mb-8 col-lg-6 col-12'>
      <h1 className=' mb-4'>
        {current?.name}
      </h1>
      <div className=''>
        <div className='justify-center'>
          <h1 className=' mb-2'>
            {" "}
            {/* <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>{" "} */}
            <FaUserCircle/>{' '}
            {current?.doctor}
          </h1>
          <p className=' mb-2'>
            {" "}
            {/* <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>{" "} */}
            <BsCurrencyDollar/>{' '}
            {current?.fees}
          </p>
          <p className=' mb-2'>
            {" "}
            {/* <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{" "} */}
            <FaHistory/>{' '}
            {current?.duration} Hour
          </p>
          <p className='mb-2'>{current?.details}</p>
        </div>
        <div>
          <img className='w-50' src={current?.image} alt='' />
        </div>
      </div>
    </div>
    <div className='col-lg-6 col-12'>
      <div className=''>
        <h1 className='text-4xl text-black font-bold'>Book An Appointment</h1>
      </div>
      <div className='mx-2 md:mr-16'>
        <form className=' m-5'>
          <input
            type='text'
            placeholder='First name'
            className='border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500 mb-3'
          />
          <br />
          <input
            type='text'
            placeholder='Last name'
            className='border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500 mb-3'
          />
          <br />
          <input
            type='text'
            placeholder='Email'
            className='border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500 mb-3'
          />
          <br />
          <button onClick={submitForm} className='bg-warning p-3 mb-4'>
            Submit
          </button>
        </form>
        <Toaster/>
      </div>
    </div>
    </div>
  </div>
  );
};

export default ServiceDetails;