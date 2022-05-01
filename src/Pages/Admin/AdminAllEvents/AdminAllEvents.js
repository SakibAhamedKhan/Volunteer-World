import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAllEvents.css'
import logo from '../../../images/Logo/Volunteer-logo.png'
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import AllEvents from '../AllEvents/AllEvents';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';


const AdminAllEvents = () => {
	const navigate = useNavigate();
	const [events, setEvents] = useState([]);
	const [refresh, setRefresh] = useState('');
	useEffect( () => {
		fetch('http://localhost:5000/events')
		.then(res => res.json())
		.then(data => setEvents(data));
	},[refresh]);

	const handleRefresh = () => {
		toast.success(`Event Removed Successfully`, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			});
		setRefresh(new Date().getTime());
		console.log('DONEO');
	}

	return (
		<div className=''>
			<div className='bg-white vh-100' style={{position:'fixed'}}>
				<div className='d-flex justify-content-center'>
					<img height={70} src={logo} alt="" />
				</div>
				<div className='my-4 d-flex justify-content-center flex-column mx-5' >
					<button onClick={() =>{
						navigate('/adminHome');
					}} className='btn btn-white border-bottom my-2'>List of register</button>
					<button onClick={() =>{
						navigate('/adminAllEvent');
					}} className='btn btn-white border-bottom my-2 fw-bold'>All Events</button>
					<button onClick={() =>{
						navigate('/adminAddEvent');
					}} className='btn btn-white border-bottom my-2'>Add Events</button>

					
					<button onClick={()=>{
						signOut(auth);
						navigate('/adminlogin');
					}} className='btn btn-dark' style={{marginTop:'50px'}}>Logout</button>
					
				</div>
			</div>
			<div className='adminHome-part1' style={{marginLeft:'250px', marginRight:'20px'}}>
			<div className='bg-white rounded'>
					<h2 className='text-center py-4'>All Events</h2>
				</div>
				<div className='bg-white mt-4 p-5 rounded'>
					{
						events.length===0?
						<Loading></Loading>
						:
						''
					}
					{
						events.map(event => <AllEvents 
							key={event._id}
							event = {event}
							handleRefresh ={handleRefresh}
							></AllEvents> )
					}
				</div>
			</div>
		</div>
	);
};

export default AdminAllEvents;