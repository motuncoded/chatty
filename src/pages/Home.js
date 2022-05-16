import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
const Home = () => {
	const navigate = useNavigate();
	const onClick=()=>{
		navigate("signUp")
	}
	return (
		<div className='home'>
			<ul className='navbar'>
				<li><a href="/">Chatty</a></li>
				<li><button onClick={onClick}> Dashboard</button></li>

			</ul>

			<div className='landing'>
				<div> <li><button onClick={onClick}> Dashboard</button></li>
</div>
				<div></div>

			</div>
		</div>
	);
};
export default Home;
