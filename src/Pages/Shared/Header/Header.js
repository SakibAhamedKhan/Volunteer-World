import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/Logo/Volunteer-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
	const [navbar, setNavbar] = useState(false);

	const changeNavBackground = () => {
		if(window.scrollY >= 80){
			setNavbar(true);
		} else{
			setNavbar(false);
		}
	}
	window.addEventListener('scroll', changeNavBackground);
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" className={`nav ${navbar? 'active': ''}`} fixed='top' variant="light">
				<Container>
				<Navbar.Brand as={Link} to="/"><img height={50} src={logo} alt="" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#deets" className='fs-6 mx-2'>Home</Nav.Link>
						<Nav.Link href="#donation" className='fs-6 mx-2'>Donation</Nav.Link>
						<Nav.Link href="#events" className='fs-6 mx-2'>Events</Nav.Link>
						<Nav.Link href="#blog" className='fs-6 mx-2'>Blog</Nav.Link>
						<button className='btn btn-primary mx-gl-3 mx-auto my-2 my-lg-0 px-4 w-50'>Register</button>
						<button className='btn btn-dark mx-lg-3 mx-auto my-2 my-lg-0 px-4 w-50'>Admin</button>
					</Nav>
				</Navbar.Collapse>
			</Container>
			</Navbar>
		</div>
		
	);
};

export default Header;