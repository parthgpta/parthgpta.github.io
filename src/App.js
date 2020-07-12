import React ,{Component} from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import {  Route, Redirect } from 'react-router-dom' ;



class App extends Component{
	componentDidMount() {
    this.props.hideLoader();
  }
	render(){
		return(
			<div>
				<Redirect exact from="/" to="/home" />
				<Route path="/home" component={Home} />
				<Route path="/about" component={About} />
				<Route path='/projects' component={Project} />
				<Route path="/contact" component={Contact} />

			</div>
		);
	}
}


export default App;
