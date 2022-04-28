import React, { useState } from 'react';
import './Register.css';
import logo from '../../../images/Logo/Volunteer-logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		createEmailError,
	  ] = useCreateUserWithEmailAndPassword(auth);
	const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
	const navigate = useNavigate();
	let errorElements;

	if(createEmailError || updateProfileError){
		errorElements = <p className='text-danger error-message'>{createEmailError?.message} {updateProfileError?.message}</p>;
	}
	if(user){
		console.log(user);
	}
	const handleSubmit = async(event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const name = event.target.name.value;
		const password = event.target.password.value;
		const date = event.target.date.value;
		const organization = event.target.organization.value;
		const dateInNumber = new Date(date).getTime();

		console.log(email, name, password, date, organization, dateInNumber);
		await createUserWithEmailAndPassword(email, password);
		await updateProfile({displayName:`{"date":"${dateInNumber}","organization":"${organization}","name":"${name}"}`});
	}
	return (
		<div className='container register mx-auto'>
			<img onClick={() => navigate('/')} style={{cursor:'pointer'}} className='d-block mx-auto' src={logo} alt="" />
			<div className='bg-white p-4 register-form-div mx-auto'>
				<h4 className='my-3 text-center'>Register as a Volunteer</h4>
				<form onSubmit={handleSubmit} className='regsiter-form'>
					<input type="text" name='name' placeholder='Full Name' required/>
					<input type="email" name='email' placeholder='Email' required/>
					<input type="password" name='password' placeholder='Password' required/>
					<input type="date" name='date' placeholder='Date' required/>
					<input type="text" name='organization' placeholder='Organization' required/>
					{
						errorElements
					}
					<button className='btn btn-primary w-100'>Register</button>
					<p className='text-center my-2'>Already have account? <Link className='text-decoration-none' to={'/login'}>Login now</Link></p>
				</form>
			</div>
		</div>
	);
};

export default Register;