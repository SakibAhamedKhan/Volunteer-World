import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeEvent.css'

const HomeEvent = ({event}) => {
	const {_id, title, descrption, image, date} = event;
	const [index, setIndex] = useState(0);
	let color = ['#421FCF', '#FF7044', '#FFBD3E', '#3F90FC'];
	const navigate = useNavigate();
	let day='';
	let month ='';
	useEffect( () => {
		const number = Math.floor(Math.random() * 4);
		setIndex(number);
	}, []);
	if(event){
		const strDay = new Date(parseInt(date)).getDate();
		day = ''+strDay;
		if(day.length===1){
			day = '0'+day;
		}
		
		const strMonth = new Date(parseInt(date)).getMonth();
		month = ''+(strMonth+1);
		if(month.length===1){
			month = '0'+month;
		}
	}
	return (
		<div onClick={()=> {
			navigate(`/eventDetails/${_id}`);
		}} className='home-event'>
			<div className='event-img'>
				<img height={80} src={image} alt="" />
			</div>
			<div style={{background: `${color[index]}`}} className='event-title'>
				<h4 className='text-white'>{title}</h4>
				<h6 className='text-white'>{day}.{month}.{new Date(parseInt(date)).getFullYear()}</h6>
			</div>
		</div>
	);
};

export default HomeEvent;
// 