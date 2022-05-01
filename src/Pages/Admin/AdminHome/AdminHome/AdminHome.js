import React, { useEffect, useState } from 'react';
import './AdminHome.css';
import logo from '../../../../images/Logo/Volunteer-logo.png'
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { signOut } from 'firebase/auth';
import { Table } from 'react-bootstrap';
import AdminUser from '../../AdminUser/AdminUser';
import Loading from '../../../Shared/Loading/Loading';

const AdminHome = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);

	useEffect( () => {
		fetch('http://localhost:5000/userRegistered')
		.then(res => res.json())
		.then(data => {
			setUsers(data);
		})
	}, []);
	return (
		<div className=''>
			<div className='bg-white vh-100' style={{position:'fixed'}}>
				<div className='d-flex justify-content-center'>
					<img height={70} src={logo} alt="" />
				</div>
				<div className='my-4 d-flex justify-content-center flex-column mx-5' >
					<button onClick={() =>{
						navigate('/adminHome');
					}} className='btn btn-white border-bottom my-2 fw-bold'>List of register</button>
					<button onClick={() =>{
						navigate('/adminAllEvent');
					}} className='btn btn-white border-bottom my-2'>All Events</button>
					<button onClick={() =>{
						navigate('/adminAddEvent');
					}} className='btn btn-white border-bottom my-2'>Add Events</button>

					
					<button onClick={()=>{
						signOut(auth);
						navigate('/adminlogin');
					}}  className='btn btn-dark' style={{marginTop:'50px'}}>Logout</button>
					
				</div>
			</div>
			<div className='adminHome-part1' style={{marginLeft:'250px', marginRight:'20px'}}>
				<div className='bg-white rounded'>
					<h2 className='text-center py-4'>List of register</h2>
				</div>
				<div className='bg-white mt-4 p-5 rounded'>
						{
								users.length===0?
								<Loading></Loading>
								:
								<Table  size="sm" className='border-white'>
									<thead className=''>
										<tr>
										<th>Name</th>
										<th>Email ID</th>
										<th>Registering Date</th>
										<th>Volunteer List</th>
										<th className='text-center'>Action</th>
										</tr>
									</thead>
									<tbody>
										{
											users.map(user => <AdminUser
												key={user._id}
												userReg={user}
											></AdminUser>)
										}
									</tbody>
								</Table>
						}
					
				</div>
			</div>
		</div>
	);
};

export default AdminHome;