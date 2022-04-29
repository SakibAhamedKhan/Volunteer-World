import React from 'react';
import useGetDataById from '../../../hooks/useGetDataById';
import Loading from '../../Shared/Loading/Loading';
import './Event.css'

const Event = ({userEvent}) => {
	console.log(userEvent);
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
						<div className='user-event-cancel-btn '>
							<button className='btn btn-secondary'>Cancel</button>
						</div>
					</div>
				</div>
			}
			
		</div>
	);
};

export default Event;