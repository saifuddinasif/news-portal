import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSide from '../LeftSide/LeftSide';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthPro/AuthPro';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
const Header = () => {

    const {user, logOut} =useContext(AuthContext)


    const handleLogout = () => {


      logOut()
      .then(() => {

      })
      .catch(error => console.error(error))

    }



    return (
        <Navbar className='mb-2' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> <Link to='/'>News portal  </Link>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
       
            </Nav>
            <Nav>
              <Nav href="#deets">
                
                {user?.uid 
                        ? 
                
                                 <>
                                   <span>{user?.displayName}</span>
                                   <Button variant='light'
                                   onClick={handleLogout}
                                   >LogOut</Button>
                                 </> 
                                 :
                <div  >
           <Button   className='m-2' variant="outline-primary"><Link bg="danger"  text="dark"  to='/login'>Login</Link></Button>

                <Button variant="outline-warning"><Link to='/register'>Register</Link></Button>  
                </div>
                
                
                }
       
                
                </Nav >

              <Link  className='m-2 ' to="/profile">
               {user?.photoURL ? <Image 
              style={{height:'30px'}}
              roundedCircle src={user.photoURL}></Image>: <FaUser></FaUser>}   
              </Link>
            </Nav>

            <div className='d-lg-none'>
                
            <LeftSide></LeftSide>    

            </div> 

          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;