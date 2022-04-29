import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import HomeEvent from '../HomeEvent/HomeEvent';
import './HomeEvents.css'

const HomeEvents = () => {
	const [events , setEvents] = useState([]);
	

	useEffect( () =>{
		fetch('http://localhost:5000/events')
		.then(res => res.json())
		.then(data => setEvents(data));
	}, []);
	
	console.log(events);
	return (
		<div className='container'>
			
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
	);
};

export default HomeEvents;