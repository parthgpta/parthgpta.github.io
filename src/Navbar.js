import React from 'react';
import './App.css' ;
import { Link } from "react-router-dom";


class Navbar extends React.Component {
	constructor(props){
		super(props);
			this.state ={
				col :[
						'Home', 'About' , 'Projects' , 'Contact'
				]
			}
		
	}

	
	render(){
		return(
			<div >
				<div className='nav'>
					
					<div className='flex-dis'>
							{ 
								this.state.col.map((name,ind) =>{
								var str = name ;
								return <div><Link to={name} ><div className='item' style={{color:this.props.active === str ?'white':'grey' }}>{name}</div></Link></div>
								})
							}
					</div>
					<div className='nw'></div>
				</div>
			</div>
							
		);
	}
}

export default Navbar ;
