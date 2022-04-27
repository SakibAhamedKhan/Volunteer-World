import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import HomeEvents from '../HomeEvents/HomeEvents';
import './Home.css'

const Home = () => {
	return (
		<>
			<Header></Header>
			<Banner></Banner>
			<HomeEvents></HomeEvents>
		</>
	);
};

export default Home;