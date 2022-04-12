import React from 'react';

const Team = ({team}) => {
    const { name, education, image } =team
    return (
        <div className='col-lg-6 col-md-12 g-2'>
             <div className='service-container '>
      <div>
        <img src={image} alt='' className='rounded-lg' />
      </div>
      <div className='mb-2'>
        <h1 className='text font-bold'>{name}</h1>
        <h1 className='text font-bold'>{education}</h1>
      </div>
    </div>
        </div>
    );
};

export default Team;