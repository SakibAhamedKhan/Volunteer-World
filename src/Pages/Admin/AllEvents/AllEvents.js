import React from 'react';
import './AllEvents.css'
import { RiDeleteBack2Line } from "react-icons/ri";

const AllEvents = ({event, handleRefresh}) => {
	console.log(event);

	const handleEventDelete = () => {
		const confirm = window.confirm(`Are you sure to remove (${event?.title}) Event?`);
		if(confirm){
			const url = `https://powerful-everglades-73325.herokuapp.com/eventDelete/${event?._id}`;
			fetch(url, {
				method:'DELETE'
			})
			.then(res => res.json())
			.then(data => {
				console.log(data);
			});
			handleRefresh();
		}
		
	}
	return (
		<div className='all-event'>
			<img height={60} src={event?.image} alt="" />
			<h6 className='m-0' style={{width:'200px'}}>{event?.title}</h6>
			<p className='m-0' style={{width:'500px'}}>{(event?.descrption).slice(0, 120)+'...'}</p>
			<h6 className='m-0'>{new Date(+(event?.date)).getDate()}-{new Date(+(event?.date)).getMonth()+1}-{new Date(+(event?.date)).getFullYear()}</h6>
			<button onClick={handleEventDelete} className='btn bg-white fs-4 text-danger'><RiDeleteBack2Line /></button>
		</div>
	);
};

export default AllEvents;