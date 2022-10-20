import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthPro/AuthPro';


const Login = () => {
    const navigate = useNavigate();
  const {signIn} = useContext(AuthContext);

//   


  const handleSubmit = event => {

         event.preventDefault();

         const form =event.target;

         const email = form.email.value;

         const password = form.password.value;

         console.log(email,password);

         signIn(email,password)
         .then(result => {

            const user = result.user;
            console.log(user);
            form.reset()
            navigate('/')

         })
         .catch(error => console.error(error))





  }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"  name='email' placeholder="Enter email" />
        
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  name='password' placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Login;