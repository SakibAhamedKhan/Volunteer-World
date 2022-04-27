import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/Logo/Volunteer-logo.png';

const Header = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" className='navbar' fixed='top' variant="light">
				<Container>
				<Navbar.Brand href="#home"><img height={50} src={logo} alt="" srcset="" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#deets" className='fs-6'>Home</Nav.Link>
						<Nav.Link href="#donation" className='fs-6'>Donation</Nav.Link>
						<Nav.Link href="#events" className='fs-6'>Events</Nav.Link>
						<Nav.Link href="#blog" className='fs-6'>Blog</Nav.Link>
						<button className='btn btn-primary mx-gl-2 mx-auto my-2 my-lg-0 px-4 w-50'>Register</button>
						<button className='btn btn-dark mx-lg-2 mx-auto my-2 my-lg-0 px-4 w-50'>Admin</button>
					</Nav>
				</Navbar.Collapse>
			</Container>
			</Navbar>
		</div>
		
	);
};

export default Header;