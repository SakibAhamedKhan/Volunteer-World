import { async } from '@firebase/util';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useGetDataById from '../../../hooks/useGetDataById';
import Loading from '../../Shared/Loading/Loading';
import './Event.css'

const Event = ({userEvent, handleRefreshAfterUpdate}) => {
	// console.log(userEvent);
	// console.log(handleRefreshAfterUpdate);
	const [user, loading, error] = useAuthState(auth);
	const [event] = useGetDataById(userEvent?.eventId);
	let day='';
	let month ='';

	if(event){
		const strDay = new Date(parseInt(event?.date)).getDate();
		day = ''+strDay;
		if(day.length===1){
			day = '0'+day;
		}
		
		const strMonth = new Date(parseInt(event?.date)).getMonth();
		month = ''+(strMonth+1);
		if(month.length===1){
			month = '0'+month;
		}
	}

	const handleCancel = async() => {
		fetch(`https://powerful-everglades-73325.herokuapp.com/userEventCancel/${event?._id}/${user?.email}`, {
			method:'DELETE'
		})
		.then(res => res.json())
		.then(data => {
			toast(`${event.title} Event is Canceled`);
		})
		handleRefreshAfterUpdate();
	}
	console.log(event);
	return (
		<div>
			{
				Object.keys(event).length===0?
				<Loading></Loading>
				:
				<div className='user-event'>
					<div className='user-event-part1'>
						<img height={150} src={event?.image} alt="" />
					</div>
					<div className='user-event-part2'>
						<div>
							<h4>{event?.title}</h4>
							<p>{day}.{month}.{new Date(parseInt(event?.date)).getFullYear()}</p>
						</div>
						<div className='user-event-cancel-btn'>
							<button onClick={handleCancel} className='btn btn-secondary'>Cancel</button>
						</div>
					</div>
				</div>
			}
			
		</div>
	);
};

export default Event;