import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../Component/Home';
import Footer from './Footer';



function Header() {
  return (
    <>
       <Navbar className="bg-dark ">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://media.istockphoto.com/id/1386208647/vector/classic-sports-car-icon.jpg?s=612x612&w=0&k=20&c=2FAMuTqmlbiRaCWixYTKJQc8wR4KDLHmzxWH3CTKCt4="
              width="80"
              height="80"

              className="d-inline-block rounded-5  align-top"
            />{' '}
          
          </Navbar.Brand>
          <h1 style={{fontSize:"25px"}} className="fw-bolder text-white "> WELCOME  CAR CITY   </h1>
        </Container>
      </Navbar>
      <Home/>
     
       <Footer/> 
    
    </>
  )
}

export default Header