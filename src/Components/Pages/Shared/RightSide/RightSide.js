import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch,FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

import ListGroup from 'react-bootstrap/ListGroup';
import { Carousel } from 'react-bootstrap/Carousel';
import Carouse from '../Carousel/Carouse';
const RightSide = () => {
    return (
        <div>
          <ButtonGroup vertical>
      <Button variant="outline-primary" ><FaGoogle></FaGoogle>  Login With Google</Button>
      <Button variant="outline-dark"> <FaGithub></FaGithub> Login With GitHub</Button>

    </ButtonGroup>


       <h2> Find Us On </h2>
 
                     
                      <div>
                      <ListGroup>
  
                    <ListGroup.Item  className='mb-2' variant="primary"> <FaFacebook></FaFacebook>  FacebOOK</ListGroup.Item>
                    <ListGroup.Item className='mb-2'  variant="secondary"> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'  variant="success"> <FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'  variant="danger"><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'  variant="warning"> <FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>

                    </ListGroup> 
                      </div>

          <Carouse></Carouse>
       
        </div>
    );
};

export default RightSide;