import React, { useEffect, useState } from 'react';
import './HomeEvent.css'

const HomeEvent = ({event}) => {
	const {id, title, description, image, data} = event;
	const [index, setIndex] = useState(0);
	let color = ['#421FCF', '#FF7044', '#FFBD3E', '#3F90FC'];

	useEffect( () => {
		const number = Math.floor(Math.random() * 4);
		setIndex(number);
	}, []);
	return (
		<div  className='home-event'>
			<div className='event-img'>
				<img height={80} src={image} alt="" />
			</div>
			<div style={{background: `${color[index]}`}} className='event-title'>
				<h4 className='text-white'>{title}</h4>
				<h6 className='text-white'>12.10.2022</h6>
			</div>
		</div>
	);
};

export default HomeEvent;
// 