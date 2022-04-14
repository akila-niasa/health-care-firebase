import React from 'react';
import useServices from '../../hooks/useServices';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import doctor from '../../images/doctor.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
    const[services,setServices]=useServices()
    
    return (
        <div className='container'>
            <Banner/>
            <h2 className=' text-center text-primary'>Our Popular Services</h2>
            <div className='row'>
                {
                    services.slice(0,6).map(service=><HomeServices key={service.id} service={service}></HomeServices>)
                }
            </div>
            <div className='bg-yellow-50 py-4'>
        <div className='my-8 flex flex-col gap-4 mx-2 md:mx-4 md:flex-row'>
          <div>
            <img src={doctor} alt='' className='rounded-lg h-50 w-75' />
          </div>
          <div className='text-center md:text-left'>
            <div>
              <h1 className='text-3xl font-bold text-center mb-4'>
                Our Doctors
              </h1>
            </div>
            <div>
              <p>
                State of the art technology and expertise combined with the
                support of our friendly staff, we strive each day to be the top
                healthcare provider, not only in Bangladesh but within the
                Asia-Pacific region.
              </p>
             <div className=''>
             <button className='mt-8 px4 py-2 border-2 border-warning bg-warning'>
                <Link to='/our-team' className='px-4 text-decoration-none text-light'>
                  Know More about Them
                </Link>
              </button>
             </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Home;