import React from 'react';
import './AdminUser.css'
import { AiFillDelete } from "react-icons/ai";

const AdminUser = ({userReg}) => {
	return (
		<tr className='tr-row'>
			<td>{userReg?.name}</td>
			<td>{userReg?.email}</td>
			<td>{new Date(+(userReg?.date)).getDate()}-{new Date(+(userReg?.date)).getMonth()+1}-{new Date(+(userReg?.date)).getFullYear()}</td>
			<td>{userReg?.organization}</td>
			<td><button className='btn bg-white text-danger d-block mx-auto fs-6 py-0 px-1'>
			<AiFillDelete/>	
			</button></td>
		</tr>
		
	);
};

export default AdminUser;