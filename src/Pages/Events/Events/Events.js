import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Header from '../../Shared/Header/Header';
import Event from '../Event/Event';
import './Event.css'

const Events = () => {
	const [user, loading, error] = useAuthState(auth);
	const [userEvents, setUserEvents] = useState([]);
	const [refresh, setRefresh] = useState(0);

	useEffect( () => {
		const url = `http://localhost:5000/userEvents/${user?.email}`;
		fetch(url)
		.then(res => res.json())
		.then(data => setUserEvents(data));
	},[user, refresh]);

	const handleRefreshAfterUpdate = () => {
		setRefresh(new Date().getTime());
	}
	return (
		<div>
			<Header></Header>
			<div className='container user-events'>
				{
					userEvents.map(userEvent => <Event
						key={userEvent._id}
						userEvent={userEvent}
						handleRefreshAfterUpdate={handleRefreshAfterUpdate}
					></Event>)
				}
			</div>
		</div>
	);
};

export default Events;