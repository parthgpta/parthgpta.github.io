import React from 'react';
import Navbar from './Navbar';
import skills from './img/skills.svg';
import edu from './img/edu.svg';
import top from './img/top1.png';
import './App.css' ;


class About extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			education: [
				{
					type: "Bachelor's Degree" ,
					name:"Indian Institue of Information Technology Design and Manufacturing" ,
					location : "Jabalpur",
					startingyear: "2018",
					endindyear:"Present",
					score:"CPI - 7.4/10"

				} ,

				{
					type: "Intermediate" ,
					name:"Jai Academy" ,
					location:"Jhansi" ,
					startingyear: "2016",
					endindyear:"2018",
					score:"Percentage - 91%"

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
				<div className="about">
				
					<Navbar active={'About'}/>
					<div className="project-inside">
					<div className="outer-card"> 
						<div className ="inner-card-side">
							<div className="inner-card-text">
								EDUCATION
							</div>
							<img src={edu} className="eduimg" alt="hat" />
						</div>
						<div className ="inner-card">
							{
								this.state.education.map((edu , index) =>{
									return <Educationdetail content={edu} /> ;
								})
							}							
						</div>
					</div>
					<Skills />	
					</div>	
					<img src={top} alt="icon" onClick={() => this.scrollToTop()} className="top-icon in-view2" style={{ display: is_visible ? 'flex' : 'none'}}/>	
				
				</div>

			</div>

		);
	}
}

export default About ;

const Educationdetail = (props) =>{
	return (
		<div className="item-card">
			<div className="item-flex">
				{props.content.type}
			</div>
			<div className="item-flex-side">
				<div className="item-text name">
					{props.content.name}
				</div>
				<div className="item-text location">
					{props.content.location}
				</div>
				<div className="item-text year-des">
					({props.content.startingyear} - {props.content.endindyear})
				</div>
				<div className="item-text year-des">
					{props.content.score}
				</div>
			</div>
		</div>

		);
}

const Skills =()=>{
	return (
		<div>
			<div className="banner-card">
					<div className="scontainer">
						<div className="banner-skills">
							<div className="banner-skills-inn">
									<div class="child-inner-con ">
										<div class="item2 head">Programming Languages</div>
										<div class="item2 element">C, C++ , Python , JavaScript, R</div>
										<div class="item2 head">Frameworks/Libraries</div>
										<div class="item2 element">Django , React.js , DjangoREST , Scikit-Learn ,Pandas ,Selenium</div>
										<div class="item2 head">Software/Utilities</div>
										<div class="item2 element">Git , Linux , STL</div>

									</div>
							</div>	
						</div>
						<div className="banner-img">
							<div className="inner-card-text">
								SKILLS
							</div>
							
							<img src={skills} className="img-01" alt="icon-man" />
							
						</div>
					</div>
				</div>
		</div>

		);
}