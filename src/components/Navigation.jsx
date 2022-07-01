
import React from 'react';
import {Link} from "react-router-dom";
import { Nav, Navbar} from "react-bootstrap";
import Logo from '../assets/logo.jpg'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand={false} bg="light" variant="light">
      <Navbar.Brand href="#home">
        <h2><img src={Logo} alt="FundRecsLogo" />FundRecs Desk Booking System</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
         <Link to="/" ><h4>Book a desk</h4></Link>
         <Link to="/bookings"><h4>View my bookings</h4></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Navigation


