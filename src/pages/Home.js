import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Home.css';
const Home = () => {
	const navigate = useNavigate();
	const onClick = () => {
		navigate('signin');
	};

	return (
		<div className='home'>
			<Header/>
			<div className='landing'>
				<div className='left'>
					<h4 className='connect'><span style={{color:"#00b4d8"}}>Communication</span> is a key factor.</h4>
					<p className='connect-paragraph'>Cherish your connections and relationships with family and friends.</p>
					<div className='btn'>
						<button type='submit' className='get-started' onClick={onClick}> Get Started</button>
					</div>
				</div>
			</div>
			<div className='right'>
				</div>
		</div>
	);
};
export default Home;
