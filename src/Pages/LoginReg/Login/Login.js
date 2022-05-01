import React from 'react';
import './Login.css'
import logo from '../../../images/Logo/Volunteer-logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
	const navigate = useNavigate();
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		loginEmailError,
	  ] = useSignInWithEmailAndPassword(auth);
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	let errorElements;

	if(loginEmailError || (user?.user?.email) === 'sakibahamedkhan@gmail.com'){
		errorElements = <p className='text-danger error-message'>{loginEmailError?.message}</p>;
		if((user?.user?.email).toLocaleLowerCase() === 'sakibahamedkhan@gmail.com'){
			errorElements = <p className='text-danger error-message'>Wrong Email</p>;
		}
	}
	if(user && (user?.user?.email).toLocaleLowerCase() !== 'sakibahamedkhan@gmail.com'){
		navigate(from, {replace:true});
	}
	if(loading){
		return <Loading></Loading>
	}
	const handleSubmit = async(event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		signInWithEmailAndPassword(email, password);
	}
	return (
		<div className='container register mx-auto'>
			<img onClick={() => navigate('/')} style={{cursor:'pointer'}} className='d-block mx-auto' src={logo} alt="" />
			<div className='bg-white p-4 register-form-div mx-auto'>
				<h4 className='my-3 text-center'>Login</h4>
				<form onSubmit={handleSubmit} className='regsiter-form'>
					<input type="email" name='email' placeholder='Email' required/>
					<input type="password" name='password' placeholder='Password' required/>
					{
						errorElements
					}
					<button className='btn btn-primary w-100'>Login</button>
					<p className='text-center my-2'>Don't have account? <Link className='text-decoration-none' to={'/register'}>Create an account</Link></p>
				</form>
			</div>
		</div>
	);
};

export default Login;