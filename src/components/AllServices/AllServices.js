import React from 'react';
import useServices from '../../hooks/useServices';
import AllServicesDetails from '../AllServicesDetails/AllServicesDetails';

const AllServices = () => {
    const[services,setServics]=useServices()
    return (
        <div className='container'>
            <h2>Our All Services</h2>
            <div className='row'>
                {
                    services.map(service=><AllServicesDetails key={service.id} service={service}></AllServicesDetails>)
                }
            </div>
        </div>
    );
};

export default AllServices;