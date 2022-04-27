import React from 'react';
import './Register.css';
import logo from '../../../images/Logo/Volunteer-logo.png'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();
	return (
		<div className='container register mx-auto'>
			<img onClick={() => navigate('/')} style={{cursor:'pointer'}} className='d-block mx-auto' src={logo} alt="" />
			<div className='bg-white p-4 register-form-div mx-auto'>
				<h4 className='my-3 text-center'>Register as a Volunteer</h4>
				<form action="" className='regsiter-form'>
					<input type="text" name='name' placeholder='Full Name' required/>
					<input type="email" name='email' placeholder='Email' required/>
					<input type="password" name='password' placeholder='Password' required/>
					<input type="date" name='date' placeholder='Date' required/>
					<input type="text" name='organization' placeholder='Organization' required/>
					<button className='btn btn-primary w-100'>Register</button>
					<p className='text-center my-2'>Already have account? <Link className='text-decoration-none' to={'/login'}>Login now</Link></p>
				</form>
			</div>
		</div>
	);
};

export default Register;