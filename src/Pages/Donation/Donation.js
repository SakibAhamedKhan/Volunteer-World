import React, { useState } from 'react';
import './Donation.css'
import Header from '../Shared/Header/Header';
import donationImage from '../../images/Donations.jpg';
import { toast } from 'react-toastify';

const Donation = () => {
	const [five, setFive] = useState(false);
	const [ten, setTen] = useState(false);
	const [fifteen, setFifteen] = useState(false);
	const [custom, setCustom] = useState(false);
	const [showInput, setShowInput] = useState(false);
	const [amount, setAmount] = useState(0);

	const handleFive = () => {
		setFive(true);
		setTen(false);
		setFifteen(false);
		setCustom(false);
		setShowInput(false);
		setAmount(5);
	}
	const handleAmount = event =>{
		event.preventDefault();
		if(showInput){
			const am = event.target.amount.value;
			setAmount(parseInt(am));
			toast(`We are Pleasure that You Donate $${am}`);
		} else {
			console.log(amount);
			toast(`We are Pleasure that You Donate $${amount}`);
		}
		
	}
	return (
		<div>
			<Header></Header>
			<div className='container donation'>
				<h3 className='text-center mb-5'>Donation</h3>
				<div className='donation-parts'>
					<div className='donation-part1'>
						<img width={500} src={donationImage} alt="" />
					</div>
					<div className='donation-part2'>
						<h5 className='mb-3'>Select an Amount: </h5>
						<div className='donation-amount'>
							<form onSubmit={handleAmount}>
								<input type="button" onClick={handleFive} className={`border border-3 rounded-btn mx-2 my-2 ${five? 'btn-active': ''}`} value='$5' />
								<input type="button" onClick={()=>{
									setFive(false);
									setTen(true);
									setFifteen(false);
									setCustom(false);
									setShowInput(false);
									setAmount(10);
								}} className={`border border-3 rounded-btn mx-2 my-2 ${ten? 'btn-active': ''}`} value='$10'/>
								<input type="button" onClick={()=>{
									setFive(false);
									setTen(false);
									setFifteen(true);
									setCustom(false);
									setShowInput(false);
									setAmount(15);
								}} className={`border border-3 rounded-btn mx-2 my-2 ${fifteen? 'btn-active': ''}`} value='$15'/>
								<input type="button" onClick={()=>{
									setFive(false);
									setTen(false);
									setFifteen(false);
									setCustom(true);
									setShowInput(true);
									
								}} className={`border border-3 rounded-btn mx-2 d-block  my-2 ${custom? 'btn-active': ''}`} value='Custom'/>
								{
								showInput?
								<input type="number" name="amount" placeholder='Enter your Amount' className='amount-input mx-2 my-3'/>
								:
								''
								}
								<input type="submit" className='mx-2 my-2 submit-btn' value='Donate'/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Donation;