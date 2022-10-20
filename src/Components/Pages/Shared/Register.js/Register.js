import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from './../../../../Context/AuthPro/AuthPro';
const Register = () => {
 
    const {createUser} =useContext(AuthContext)

 const handleSubmit = (e) => {

 

      e.preventDefault()

      const form = e.target;

      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const photoURL = form.photoURL.value;
  
      
      console.log(name,photoURL, email,password)


      createUser(email,password)
      .then(result => {

        const user = result.user;

        console.log(user);
        form.reset()

      })
      .catch(e =>  console.error(e));





 } 

    return (
        <Form  onSubmit={handleSubmit}>
       
       <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>EMAIL </Form.Label>
          <Form.Control  name='email' type="email" placeholder="Enter email" required />
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name  </Form.Label>
          <Form.Control type="name" name='name' placeholder="Name" required />
        </Form.Group>

      

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url </Form.Label>
          <Form.Control  
          name="photoURL"
          type="text" placeholder="Enter Photo" />
        
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" 
          name='password'
          placeholder="Password" required/>
        </Form.Group>
      
        <Button variant="primary" type="submit">
      Register 
        </Button>
      </Form>
    );
};

export default Register;