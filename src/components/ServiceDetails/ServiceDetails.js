import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';


const ServiceDetails = () => {
  const { id } = useParams();
;
console.log(id);
 
  return (
    <div>
      <h2>our service</h2>
     
    </div>
  );
};

export default ServiceDetails;