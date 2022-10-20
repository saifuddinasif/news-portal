
import Carousel from 'react-bootstrap/Carousel';

import download from '../../../../assets/download.jpg';

import OIP from '../../../../assets/OIP.jpg';



import React from 'react';

const Carouse = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={download}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={OIP}
          alt="Second slide"
        />

      
      </Carousel.Item>
   
    </Carousel>
  );
    
};

export default Carouse;