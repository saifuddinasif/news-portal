import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSide from '../LeftSide/LeftSide';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthPro/AuthPro';
import { Button, Image } from 'react-bootstrap';
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
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                
                {user?.uid 
                        ? 
                
                                 <>
                                   <span>{user?.displayName}</span>
                                   <Button variant='light'
                                   onClick={handleLogout}
                                   >LogOut</Button>
                                 </> 
                                 :
                <>
                  <Link to='/login'>Login</Link>
                  <Link to='/register'>Register</Link>
                </>
                
                
                }
       
                
                </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
               {user?.photoURL ? <Image 
              style={{height:'30px'}}
              roundedCircle src={user.photoURL}></Image>: "hello"}   
              </Nav.Link>
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