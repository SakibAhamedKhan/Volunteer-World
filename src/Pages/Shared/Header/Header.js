import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/Logo/Volunteer-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';

const Header = () => {
	const [user, loading, error] = useAuthState(auth);
	const [navbar, setNavbar] = useState(false);
	const navigate = useNavigate();

	let userObj = {}
	if(user && user.email !== 'sakibahamedkhan@gmail.com'){
		const str = user.displayName;
		userObj = JSON.parse(str);
	}
	// if(loading){
	// 	return;
	// }
	const changeNavBackground = () => {
		if(window.scrollY >= 30){
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
						<Nav.Link as={Link} to="/" className='fs-6 mx-2 menu-part text-center'>Home</Nav.Link>
						<Nav.Link as={Link} to="/donation" className='fs-6 mx-2 menu-part text-center'>Donation</Nav.Link>
						<Nav.Link as={Link} to="/events" className='fs-6 mx-2 menu-part text-center'>Events</Nav.Link>
						<Nav.Link as={Link} to="/blogs" className='fs-6 mx-2 menu-part text-center'>Blogs</Nav.Link>
						{
							(user && user.email !== 'sakibahamedkhan@gmail.com')?
							<div className='user-navbar'>
								<Nav.Link as={Link} to="/user" className='fs-6 mx-2 menu-part w-100 text-center'>{userObj?.name}</Nav.Link>
								<button onClick={() => signOut(auth)} className='btn btn-dark mx-lg-3 mx-auto my-2 my-lg-0 px-4 w-50'>Logout</button>
							</div>
							:
							<>
								<button onClick={() => navigate('/register')} className='btn btn-primary mx-gl-3 mx-auto my-2 my-lg-0 px-4 w-50'>Register</button>
								<button onClick={() => navigate('/adminlogin')} className='btn btn-dark mx-lg-3 mx-auto my-2 my-lg-0 px-4 w-50'>Admin</button>
							</>
						}
						
					</Nav>
				</Navbar.Collapse>
			</Container>
			</Navbar>
		</div>
		
	);
};

export default Header;