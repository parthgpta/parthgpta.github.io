import React from 'react';
import './App.css' ;


class Button extends React.Component {
	constructor(){
		super();
		this.state = {
			links :[ {
					name : 'linkedin' ,
					type : 'fab' ,
					link : 'https://www.linkedin.com/in/parth-gupta-1284a9193/'
			} ,
			{
					name : 'github' ,
					type : 'fab' ,
					link : 'https://github.com/parthgpta'
			} ,
			{
					name : 'envelope' ,
					type : 'fas' ,
					link : 'mailto:parthgupta9452@gmail.com'
			} ,
			{
					name : 'file' ,
					type : 'fas' ,
					link : 'https://drive.google.com/file/d/1kHM1RJcV3QMP7cUjGr2SXLTYMN53Z19k/view?usp=sharing'
			} ,
			{
					name : 'facebook' ,
					type : 'fab' ,
					link : 'https://www.facebook.com/parth.gupta10'
			}
			]
		}

	}
	
	render(){
		return(
			<div className='banner-icon'>
				{
					this.state.links.map((link,index) => {
 					return <Buttonadd name={link.name} link={link.link} type={link.type} />
 					}) 
				}
			</div>
							
		);
	}
}

export default Button ;

const Buttonadd =(props)=>{
	return (<div><a href={props.link} target='_blank' rel="noopener noreferrer"><i className={props.type +' fa-' +props.name} /></a></div>);
}

