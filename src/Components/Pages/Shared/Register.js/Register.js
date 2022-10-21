import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../../../Context/AuthPro/AuthPro';
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {
 
    const {createUser,verifyEmail, updateUserProfile} =useContext(AuthContext)

    const [error,setError] = useState();

    const [accepted, setAccepted] = useState(false);


 const handleSubmit = (e) => {


      e.preventDefault()

      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const photoURL = form.photoURL.value;
    
      
      console.log(name,photoURL,email,password)


      createUser(email,password)
      .then(result => {

        const user = result.user;

        console.log(user);
        setError('')
        form.reset()
        handleupdateUserProfile(name,photoURL)
        handleEmailVeryfication()
        toast.success('veryfy email');

      })
      .catch(e => { 
        
        console.error(e)
      
        setError(e.message);

      });
 } 

  const handleEmailVeryfication = () =>{

    verifyEmail()
    .then(() => {

    })
    .catch( error => console.error(error))
  }

  const  handleupdateUserProfile = (name,photoURL) => {

    const profile = {

           displayName :name,

           photoURL:photoURL
    }

    updateUserProfile(profile)
    .then(() => {

    })
    .catch(error => console.error(error));

  }


  const handleCheck  = (event) => {
   
     setAccepted(event.target.checked)

       
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
           
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        
        onClick={handleCheck}
        
        type="checkbox" label={<>Accept  
        
        <Link to='/terms'> Terms And Conditions "</Link>
        
        </> } />
      </Form.Group>

       
        <Button variant="primary" type="submit" disabled={!accepted}>
      Register 
        </Button>
        <p className='text-danger'>{error}</p>
      </Form>
    );
};

export default Register;