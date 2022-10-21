import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthPro/AuthPro';

const Profile = () => {

  const {user} = useContext(AuthContext)

  const [name,setName]= useState(user.displayName);

  const photoURLRef = useRef(user.photoURL);



     const handleSubmit = event => {
     
         event.preventDefault();

         console.log(name,photoURLRef);


     }

   const handlNameChange = event => {

    setName(event.target.defaultValue)
   }


    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" readOnly defaultValue={user?.email}  placeholder="Enter email" />
       
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name </Form.Label>
          <Form.Control 
          
          onChange={handlNameChange}
          defaultValue={name} type="text" placeholder="UserName " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>photoURL </Form.Label>
          <Form.Control
          ref={photoURLRef}
           defaultValue={user?.photoURL} type="photoUR" placeholder="photoURL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="text"  placeholder='name' />
        </Form.Group>





        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Profile;