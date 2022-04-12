import React from 'react';
import { Link } from 'react-router-dom';

const HomeServices = ({service}) => {
    const{name,image,doctor,id}=service
    return (
        <div className='service-container col-lg-4 col-md-6 '>
      <div className='mb-4'>
        <img src={image} alt='' className='h-50 rounded-lg w-75' />
      </div>
      <div>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h4 className='text-lg font-semibold'>{doctor}</h4>
       <div className='mx-auto'>
       <button className='mt-2 mb-4 px-4 py-1 border-2 bg-warning '>
          <Link to={`/services/${id}`}>Details</Link>
        </button>
       </div>
      </div>
    </div>
    );
};

export default HomeServices;