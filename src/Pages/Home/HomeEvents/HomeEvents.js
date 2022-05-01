import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import HomeEvent from '../HomeEvent/HomeEvent';
import './HomeEvents.css'

const HomeEvents = () => {
	const [events , setEvents] = useState([]);
	const [refresh, setRefresh] = useState('');

	useEffect( () =>{
		fetch('http://localhost:5000/events')
		.then(res => res.json())
		.then(data => setEvents(data));
		console.log('eventRef');
	}, [refresh]);
	
	const handleSeacrhFromUser = (eventSearched) =>{
		console.log(eventSearched);
		setEvents(eventSearched)
	}

	const handleRefresh = () =>{
		toast('All events Refreshed');
		setRefresh(new Date().getTime());
	}
	console.log(events);
	return (
		<>
		<Banner key={new Date().getTime()} handleSeacrhFromUser={handleSeacrhFromUser}></Banner>
		<div className='container'>
			<button onClick={handleRefresh} className='btn border border-success border-2 my-5'>refresh</button>
			{
				events.length===0?
				<div style={{height:'1200px'}}>
					<Loading></Loading>
				</div>
				:
				<div className='home-events'>
					{
						events.map( event => <HomeEvent
							key={event._id}
							event={event}
							></HomeEvent>)
					}
				</div>
			}
		</div>
		</>
	);
};

export default HomeEvents;