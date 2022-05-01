import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuthAdmin = ({children}) => {
	const [user, loading] = useAuthState(auth);
	const location = useLocation();

	if(loading){
		return <Loading></Loading>
	}
	if(!user || (user?.email).toLocaleLowerCase() !== 'sakibahamedkhan@gmail.com'){
		return <Navigate to='/adminlogin' state={{from:location}} replace></Navigate>
	}
	return children;
};

export default RequireAuthAdmin;