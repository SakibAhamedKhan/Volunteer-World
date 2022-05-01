import React from 'react';
import './AdminAddEvent.css'
import logo from '../../../images/Logo/Volunteer-logo.png';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';


const AdminAddEvent = () => {
	const navigate = useNavigate();

	const handleAddEventSubmit = (event) => {
		event.preventDefault();
		const title = event.target.title.value;
		const descrption = event.target.descrption.value;
		const date = event.target.date.value;
		const image = event.target.image.value;
		const dateInNumber = new Date(date).getTime();
		const doc = {
			title:title,
			descrption:descrption,
			date:dateInNumber,
			image:image
		}
		console.log(title, descrption, dateInNumber, image);

		fetch('https://powerful-everglades-73325.herokuapp.com/eventAdd', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(doc)
		})
		.then(res => res.json())
		.then(data => {
			toast.success(`Event Added Successfully`, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
		})
		event.target.reset();
	}
	return (
		<div className=''>
			<div className='bg-white vh-100' style={{position:'fixed'}}>
				<div className='d-flex justify-content-center'>
					<img height={70} src={logo} alt="" />
				</div>
				<div className='my-4 d-flex justify-content-center flex-column mx-5' >
					<button onClick={() =>{
						navigate('/adminHome');
					}} className='btn btn-white border-bottom my-2'>List of register</button>
					<button onClick={() =>{
						navigate('/adminAllEvent');
					}} className='btn btn-white border-bottom my-2'>All Events</button>
					<button onClick={() =>{
						navigate('/adminAddEvent');
					}} className='btn btn-white border-bottom my-2 fw-bold'>Add Events</button>

					
					<button onClick={()=>{
						signOut(auth);
						navigate('/adminlogin');
					}}  className='btn btn-dark' style={{marginTop:'50px'}}>Logout</button>
					
				</div>
			</div>
			<div className='adminHome-part1' style={{marginLeft:'250px', marginRight:'20px'}}>
				<div className='bg-white rounded'>
					<h2 className='text-center py-4'>Add Events</h2>
				</div>
				<div className='bg-white mt-4 p-5 rounded'>
					<form onSubmit={handleAddEventSubmit} className='addEvent-parts'>
						<div>
							<h5>Event Title</h5>
							<input type="text" name='title' placeholder='Enter Title' required/>

							<h5>Description</h5>
							<textarea type="text" name='descrption' placeholder='Enter Description' required/>
						</div>
						<div>
							<h5>Event Date</h5>
							<input type="date" name='date' required/>
							
							<h5>Banner</h5>
							<input type="text" name='image' placeholder='Banner image link' required/>
						</div>
						<div>

						</div>
						<button type='submit' className='btn btn-primary mt-5 px-4' style={{justifySelf:'right'}}>Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminAddEvent;