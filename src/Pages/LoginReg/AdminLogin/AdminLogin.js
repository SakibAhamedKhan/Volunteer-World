import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../images/Logo/Volunteer-logo.png';
import './AdminLogin.css'

const AdminLogin = () => {
	const navigate = useNavigate();
	return (
		<div className='container register mx-auto'>
			<img onClick={() => navigate('/')} style={{cursor:'pointer'}} className='d-block mx-auto' src={logo} alt="" />
			<div className='bg-white p-4 register-form-div mx-auto'>
				<h4 className='my-3 text-center'>Login as Admin</h4>
				<form action="" className='regsiter-form'>
					<input type="email" name='email' placeholder='Email' required/>
					<input type="password" name='password' placeholder='Password' required/>
					<button className='btn btn-primary w-100 mb-4'>Admin Login</button>
					{/* <p className='text-center my-2'>Don't have account? <Link className='text-decoration-none' to={'/register'}>Create an account</Link></p> */}
				</form>
			</div>
		</div>
	);
};

export default AdminLogin;