import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useGetDataById from '../../../hooks/useGetDataById';
import Header from '../../Shared/Header/Header';
import './HomeEventDetails.css'
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const HomeEventDetails = () => {
	const {eventId} = useParams();
	const [event] = useGetDataById(eventId);
	const [user, loading, error] = useAuthState(auth);
	const [join, setJoin] = useState(false);
	const navigate = useNavigate();
	
	// console.log(user);

	useEffect( () => {
		const url = `http://localhost:5000/userEventCheck/${eventId}/${user?.email}`;
		fetch(url)
		.then(res => res.json())
		.then(data => {
			setJoin(data?.already);
		})
	},[eventId]);

	const addUserEvent = async() => {
		
		if(user){
			const addEvent = {
				email: user?.email,
				eventId: eventId
			}
			fetch('http://localhost:5000/userEvents', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(addEvent)
			})
			.then(res => res.json())
			.then(data => {
				if(data?.message){
					toast.warn(data?.message, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						});
				} else{
					toast.success(`Joined ${event.title} Event Successfully`, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						});
				}
			})
			setJoin(true);
		} else{
			navigate('/login');
		}
		
	}

	const handleSeeMore = () => {

	}

	if(Object.keys(event).length===0){
		return  <Loading></Loading>;
	}
	return (
		<div>
			<Header></Header>
			<div className='container home-event-details'>
				
				{
					Object.keys(event).length===0?
					<div>
						<Loading></Loading>
					</div>
					:
					<div className='home-event-details-parts'>
					<div className='home-event-part1'>
						<h2 className=''>{event?.title}</h2>
						<h6 className='mb-4'>Event Time: {new Date(parseInt(event?.date)).toUTCString()}</h6>
						<p className='' style={{textAlign:'justify'}}> <span className='fw-bold'>About this event:</span> {
							(event?.descrption).length>=800 ?
							<>
								<p>{(event?.descrption).slice(0,500)+'...'}</p>
								<button onClick={handleSeeMore} className='btn btn-white text-danger border border-1 border-danger d-block mx-auto mt-4'>See More</button>
							</>
							:
							<p>{event?.descrption}</p>
						}</p>
						{
							join?
							<button onClick={addUserEvent} className='btn btn-success my-3' disabled>Already Joined</button>
							:
							<button onClick={addUserEvent} className='btn btn-success my-3'>Join This Event</button>
						}
					</div>
					<div className='home-event-part2'>
						<img height={300} src={event?.image} alt="" />
					</div>
					</div>
				}
				
			</div>
		</div>
	);
};

export default HomeEventDetails;