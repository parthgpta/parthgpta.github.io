import React from 'react';
import Navbar from './Navbar';
import contactimg from './img/contact.svg';
import './App.css' ;


class Contact extends React.Component {
	constructor(){
		super();
		this.state = {
			
		};
	}

componentDidMount() {
	document.body.classList.remove('added-home');
	document.body.classList.add('added-else');
   
  }

	


	render(){
		return(
			<div>
				<div className="contact">
					<Navbar active={'Contact'}/>
					<div className="project-inside">
						<div className="contact-card">
							
								<img src={contactimg} className="contact-img" alt="contactimage" />
							
							<div className="contact-des">
								<div className="contact-deshead">
									Get In Touch
								</div>
								<div className="contact-dessub">
									“The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.”
								</div>
								<Form />
								<hr id="extra-line" />
								<Extracon />
							</div>
						</div>
					</div>
					
					</div>
			</div>
		);

	}
}

export default Contact ;

const Form=()=>{
	return(
		<div>
		<form action="https://formspree.io/mnqgonyw" method="POST" >
			<div className="con-form">
				
					<div className="label-head">
						<label for="name" > Name </label>
						<input type="text" id="name" name="name" />
					</div>

					<div className="label-head">
						<label for="email" > Email </label>
						<input type="email" id="email" name="email" />
					</div>

					<div className="label-head">
						<label for="message" > Message</label>
						<textarea rows = "5" cols = "50" name = "message" id="message"></textarea>
					</div>

					<button type="submit" class="btn btn-light "> SUBMIT</button>
				
			</div>
		</form>
		</div>

	);
}


const Extracon=()=>{
	return(
			<div>
			<div className="extracon">
								<div className="extraitem">
									<i class="fas fa-envelope"></i> 
									<div className="contact-item"> parthgupta9452@gmail.com </div>
								</div>
								<div className="extraitem">
									<i class="fas fa-phone-alt"></i>
									<div className="contact-item">+91 9889335036 </div>
								</div>
								<div className="extraitem">
									<i class="fas fa-map-marked"></i>
									<div className="contact-item"> Hall 4 , IIITDM Jabalpur , MP 482005 , INDIA </div>
								</div>
							</div>
			</div>
		);
}
