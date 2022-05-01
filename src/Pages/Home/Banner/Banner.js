import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './Banner.css'

const Banner = ({handleSeacrhFromUser}) => {
	const [searchTyped, setSearchTyped] = useState('');

	const searchInput = event => {

		setSearchTyped(event.target.value);
		
	}
	const handleSearch = (event) =>{
		searchfromDatabase();
	}
	const searchfromDatabase = () => {
		fetch(`http://localhost:5000/eventSearch?search=${searchTyped}`)
		.then(res => res.json())
		.then(data => {
			if(data.length===0){
				toast('Not Founded');
			} else{
				
				handleSeacrhFromUser(data);
			}
		});
	}
	return (
		<div className='banner'>
			<div className='banner-title'>
				<h2 className='text-dark fw-bold text-center px-2'>WE GROW BY HELPING PEOPLE IN NEED.</h2>
				<InputGroup  className="my-4 input-field px-2 d-flex justify-content-center flex-nowrap">
					{/* <FormControl
					placeholder="Search..."
					aria-label="Search"
					aria-describedby="basic-addon2"
					onBlur={searchInput}
					/> */}
					<input type="text" onBlur={searchInput} placeholder='Search' style={{
						padding:'5px 10px',
						border:'1px solid gray',
						borderRadius:'5px',
						outline:'none'
					}} />
					<Button type='submit' onClick={handleSearch} variant="outline-primary" className='bg-primary text-white px-4' id="button-addon2">
					Search
					</Button>
				</InputGroup>
				
			</div>
			
		</div>
	);
};

export default Banner;