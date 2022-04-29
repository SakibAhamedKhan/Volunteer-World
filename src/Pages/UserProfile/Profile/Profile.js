import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Profile.css'

const Profile = () => {
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	let userObj = {};

	if(user){
		const str = user.displayName;
		userObj = JSON.parse(str);
	}
	
	return (
		<div className='container profile'>
			<h4 className='text-center border-bottom border-2 border-dark pb-3 mb-4'>Profile</h4>
			<p>Volunteer Name: {userObj?.name}</p>
			<p>Organization: {userObj?.organization}</p>
			<p>Date of Register: {new Date(+(userObj?.date)).getDate()}-{new Date(+(userObj?.date)).getMonth()+1}-{new Date(+(userObj?.date)).getFullYear()}</p>
			<button onClick={ () => {
				signOut(auth);
				navigate('/login');
			}} className='btn btn-dark mt-3'>Logout</button>
		</div>
	);
};

export default Profile;