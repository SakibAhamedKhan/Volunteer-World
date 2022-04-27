import React, { useEffect, useState } from 'react';
import HomeEvent from '../HomeEvent/HomeEvent';
import './HomeEvents.css'

const HomeEvents = () => {
	const [events , setEvents] = useState([]);

	useEffect( () =>{
		fetch('data.json')
		.then(res => res.json())
		.then(data => setEvents(data));
	}, []);
	return (
		<div className='container'>
			<div className='home-events'>
			{
				events.map( event => <HomeEvent
					key={event.id}
					event={event}
				></HomeEvent>)
			}
			</div>
		</div>
	);
};

export default HomeEvents;