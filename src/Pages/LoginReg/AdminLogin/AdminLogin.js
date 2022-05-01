import { async } from '@firebase/util';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/Logo/Volunteer-logo.png';
import Loading from '../../Shared/Loading/Loading';
import './AdminLogin.css'

const AdminLogin = () => {
	const navigate = useNavigate();
	
	const [
		signInWithEmailAndPassword,
		user,
		emailSingInLoading,
		emailSignInError,
	  ] = useSignInWithEmailAndPassword(auth);
	let errorElement;
	if(user && user?.user?.email !== 'sakibahamedkhan@gmail.com')
	{
		signOut(auth);
		errorElement = <p className='text-danger'>Wrong Email</p>;
	}

	if(user && user?.user?.email === 'sakibahamedkhan@gmail.com'){
		navigate('/adminHome');
	}

	if(emailSingInLoading){
		return <Loading></Loading>;
	}
	
	if(emailSignInError){
		errorElement = <p className='text-danger'>{emailSignInError?.message}</p>;
	}


	const handleAdminLogin =async (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
	
		// console.log(email, password);
		// fetch(`http://localhost:5000/adminEmailPassCheck/${email}/${password}`)
		// .then(res => res.json())
		// .then(data => {
		// 	if(data.login === true){
		// 		setError('');
		// 		navigate('/adminHome');
		// 	} else{
		// 		setError(data.message);
		// 	}
		// })
		errorElement = '';
		signInWithEmailAndPassword(email, password);
	}
	return (
		<div className='container register mx-auto'>
			<img onClick={() => navigate('/')} style={{cursor:'pointer'}} className='d-block mx-auto' src={logo} alt="" />
			<div className='bg-white p-4 register-form-div mx-auto'>
				<h4 className='my-3 text-center'>Login as Admin</h4>
				<form onSubmit={handleAdminLogin} className='regsiter-form'>
					<input type="email" name='email' placeholder='Email' required/>
					<input type="password" name='password' placeholder='Password' required/>
					{
						errorElement
					}
					<button className='btn btn-primary w-100 mb-4'>Admin Login</button>
					{/* <p className='text-center my-2'>Don't have account? <Link className='text-decoration-none' to={'/register'}>Create an account</Link></p> */}
				</form>
			</div>
		</div>
	);
};

export default AdminLogin;