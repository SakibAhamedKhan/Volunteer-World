import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
	return (
		<div className='banner'>
			<div className='banner-title'>
				<h2 className='text-dark fw-bold'>WE GROW BY HELPING PEOPLE IN NEED.</h2>
				<InputGroup  className="mx-auto my-4 input-field">
					<FormControl
					placeholder="Search..."
					aria-label="Search"
					aria-describedby="basic-addon2"
					/>
					<Button variant="outline-primary" className='bg-primary text-white px-4' id="button-addon2">
					Search
					</Button>
				</InputGroup>
			</div>
			
		</div>
	);
};

export default Banner;