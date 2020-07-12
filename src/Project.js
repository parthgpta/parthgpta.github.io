import React from 'react';
import Navbar from './Navbar';
import top from './img/top1.png';
import './App.css' ;


class Project extends React.Component {
	constructor(){
		super();
		this.state = {
			projects: [
				{
					name:"Bluetickk",
					description:"It is an app for encrypting and decrypting whatsapp messages directly, It uses a custom Encrypting algorithm",
					link:"https://github.com/parthgpta/BlueTickk"

				} ,

				{
					
					name:"InnChoice",
					description:"It is an online Room Booking Portal  with customisable API endpoints ",
					link:"https://github.com/parthgpta/INNchoice"

				},
				
				{
					
					name:"FusionIIIT",
					description:"It is an ERP for Institute IIITDM Jabalpur , I have worked on the new Academic Module and tested other modules as well",
					link:"https://github.com/parthgpta/Fusion"


				},

				{
					
					name:"BloodRed",
					description:"It is an online blood bank database management system , userfriendly Interface and Admin Privilages ",
					link:"https://github.com/parthgpta/Blood_RED"


				},

				
				
			] ,
			is_visible : false ,
		};
	}

	componentDidMount() {
	document.body.classList.remove('added-home');
	document.body.classList.add('added-else');
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

 toggleVisibility() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

 scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

	

	render(){

		const  is_visible  = this.state.is_visible;

		return(
			<div>
				<div className="project">
					
					<Navbar active={'Projects'}/>
					<div className="project-inside">
					<div className="project-heading">
						PROJECTS
					</div>
					<div className="project-container">
						{
							this.state.projects.map((project,ind)=>{
								return <Projects content={project} index={ind} />;
							})
						}
					</div>
				
						
					</div>
					<img src={top} alt="icon" onClick={() => this.scrollToTop()} className="top-icon in-view2" style={{ display: is_visible ? 'flex' : 'none'}}/>
					</div>
			</div>
		);
	}
}

export default Project ;

const Projects = (props) =>{
	return (
		<div className="box">
			<h1>{props.index +1}</h1>
			<div className="box-head">
				{props.content.name}
			</div>
			<div className="box-des">
				{props.content.description}
			</div>
			
			<a href={props.content.link}  target="_blank"  rel="noopener noreferrer">
				<button type="button" class="btn btn-light box-but">
					<div>View in</div>
					<i className="fab fa-github" />
			

				</button>
			</a>
			
		</div>

		);
}


