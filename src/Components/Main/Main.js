import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSide from '../Pages/Shared/LeftSide/LeftSide';
import RightSide from '../Pages/Shared/RightSide/RightSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
             <Row>

               <Col lg='2'>
           <LeftSide></LeftSide>
               </Col>

                    
               <Col lg='7'>

               <Outlet></Outlet>
            
               </Col>

                    
               <Col lg='3'>
             <RightSide></RightSide>
               </Col>




             </Row>
      
            </Container>

            <Footer></Footer>
             </div>

    );
};

export default Main;