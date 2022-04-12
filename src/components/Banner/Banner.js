import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div  className='bg-gray-700 banner h-100'>
            <h1 className='mt-5 mx-5 mb-5 text-light'>Make your life good not only outside but also inside.</h1>
           <div className='mx-5 p-5'>
           <button className='px-6 py-4 bg-warning'>
            <Link  to='/services' className='font-bold text-decoration-none text-light'>
              Our Services
            </Link>
            </button>
           </div>
          
        </div>
    );
};

export default Banner;