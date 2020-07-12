import React from 'react';
import Button from './banner-buttons';
import Navbar from './Navbar';
import './App.css' ;

var flag = true ;

class Home extends React.Component {
	

	componentDidMount(){
		document.body.classList.remove('added-else');
		document.body.classList.add('added-home');

		const hm = document.querySelector('.home');
		if(flag){
			hm.classList.add('in-view');
			flag = false;
			
		}
	}
	render(){
		return(
			<div>
				<div className='home'>
					<Navbar active={'Home'} />
					<div className="project-inside">
					<div className='banner'>
						<div className='banner-text text_01'>
							Hi , I'm Parth :)
							<div className='banner-text-about'>
								I love to stay constantly updated with the recent tools and trends in the tech industry.
								Applying my programming skills to solve real world problems in an efficient manner is what excites me.
								I am a curious learner focused on maximizing my learning experiences.
							</div><hr/>
							<Button />
						</div>
						
					</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home ;

