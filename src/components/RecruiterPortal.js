import React ,{Component} from 'react';/*main component*/
import 'bootstrap/dist/css/bootstrap.css';/*in order to use bootstrap functionality*/
import Modal from "react-animated-modal";/*animated modal*/
import Jumbotron from 'react-bootstrap/Jumbotron';/*to use jumbotron*/
/*font awesome library*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase,faAddressCard,faCalendar,faUser,faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
/*importing files created in the same folder*/
import FooterFormat from  './footer.js';
import BlockFilter from  './blockfilter.js';
import company from './images/company.jpg';
import back from './images/back.jpg';

class RecruiterPortal extends Component{
		 constructor(){
			 /*binding the functions inside constructor*/
		   super();
			this.acceptedMain = this.acceptedMain.bind(this);
			this.rejectedMain = this.rejectedMain.bind(this);
		 }
 
	    
		  state = {
			  showacceptedModal: false,
			  showrejectedtedModal: false ,
			  details:[],
			  /*array of information about all the jobs*/
			  timingList: [
				{
					id: 1,
					title: 'front end developer',
					company_name:'company A',
					dept: 'web development',
					company_location:'chandigarh',
					number:'123456',
					exp:"7-10 yrs",
					job_type:"full time",
					candidate:'3 candidates',
					stripend:"23-25 lakhs"
				},
				{
					id: 2,
					title:'back  end developer',
					company_name:'company B',
					dept: 'web development',
					company_location:'noida',
					number:'345678',
					exp:"7-10 yrs",job_type:"full time",
					candidate:'3 candidates',
					stripend:"23-25 lakhs"
				},
				{
					id: 3,
					title:'PHP developer',
					company_name:'company C',
					dept: 'web development',
					company_location:'bangaluru',
					number:'678901',
					exp:"7-10 yrs",
					job_type:"full time",
					candidate:'3 candidates',
					stripend:"23-25 lakhs"
				},
				{
					id: 4,
					title:'laravel developer',
				    company_name:'company D',
					dept: 'web development',
					company_location:'pune',
					number:'456321',
					exp:"7-10 yrs",
					job_type:"full time",
					candidate:'3 candidates',
					stripend:"23-25 lakhs"
				},
				{
					id: 5,
					title:'React end developer',
				    company_name:'company E',
					dept: 'web development',
					company_location:'mumbai',
					number:'765432',
					exp:"7-10 yrs",
					job_type:"full time",
					candidate:'3 candidates',
					stripend:"23-25 lakhs"
				},
				{
					id: 6,
					title:'MERN stack developer',
				    company_name:'company F',
					dept: 'web development',
					company_location:'hyderabad',
					number:'987654',
					exp:"7-10 yrs",
					job_type:"full time",
					candidate:'3 candidates',
					stripend:"23-25 lakhs"
				}
				
			]
		};


		render() {
			
				var container_image={
					/*by using this variable named container_image we can apply styling on any tag*/
					borderRadius: '2% 40%',
					border:'2px solid black',
					width:'90%'
				}
				return (
						  <div className="main-container">
						  {/*animated modal in order to show the confirmation of accepted job*/}
								<Modal
									visible={this.state.showacceptedModal}
									closemodal={() => this.setState({ showacceptedModal: false })}
									type="flipInX"
								>
										<div style={{backgroundColor:'#009933',textAlign:'center',fontWeight:'bold',fontSize:'20px',marginTop:'40px'}}>
												id number :-{this.state.details.id}<br/>
												job profile:-{this.state.details.title}({this.state.details.job_type})<br/>
												company:-{this.state.details.company_name},{this.state.details.company_location}<br/>
												stripend:-{this.state.details.stripend}   is accepted
										</div>
										
								</Modal>
								{/*animated modal in order to show the confirmation of rejected job*/}
								<Modal
									visible={this.state.showrejectedModal}
									closemodal={() => this.setState({ showrejectedModal: false })}
									type="flipInX"
								>
										<div style={{backgroundColor:'#990000',textAlign:'center',fontWeight:'bold',fontSize:'20px',marginTop:'40px'}}>
												id number :-{this.state.details.id}<br/>
												job profile:-{this.state.details.title}({this.state.details.job_type})<br/>
												company:-{this.state.details.company_name},{this.state.details.company_location}<br/>
												stripend:-{this.state.details.stripend}   is rejected
										 </div>
											
								</Modal>
								
								<div className="container">
										<div className="row">
											<div className="col-md-10">
											  <span className="timing-list-container" style={{position:'relative',marginTop:'30%'}}>
												{
													  /*fetching data of the job one by one from timingList array by mapping*/
													  this.state.timingList.map((timing,i) => {
														  return  <Jumbotron style={{backgroundImage: `url(${back})`,backgroundRepeat: 'no-repeat',backgroundAttachment: 'fixed',backgroundSize: '100% 100%'}}>
														  <span key={timing.id}>
																  <div className="row">
																		  <div className="col-md-4">
																		  
																				<img src={company} style={container_image}/>
																				<div className="row">
																					<div className="col-md-10">
																						 <b>{timing.title} ({timing.job_type})</b>
																						 <hr style={{border:'2px groove black',width:'60%'}}/>
																					 </div>
																				</div>
																				<div className="row">
																					<div className="col-md-10">
																						 <b>{timing.company_name} , {timing.company_location}</b>
																						 
																					 </div>
																				</div>
																	      </div>
																		  <div className="col-md-8">
																					   <span className="row">
																							<div className="col-md-6"> <FontAwesomeIcon icon={faAddressCard} style={{fontSize:'300%'}}/> {timing.number}
																							</div>
																							<div className="col-md-6"> <FontAwesomeIcon icon={faBriefcase} style={{fontSize:'300%'}}/> {timing.exp}
																							</div>
																						</span>
																						<span className="row">
																							<div className="col-md-6">
																								<FontAwesomeIcon icon={faCalendar} style={{fontSize:'300%'}}/>{timing.job_type}
																							</div>
																						</span>
																						<hr style={{border:'2px groove black',width:'60%'}}/>  
																						<span className="row">
																							<div className="col-md-6"> 
																								<FontAwesomeIcon icon={faUser} style={{fontSize:'300%'}}/> {timing.candidate}
																							</div>
																							<div className="col-md-6"> 
																								<FontAwesomeIcon icon={faMoneyBillAlt} style={{fontSize:'300%'}}/> {timing.stripend}
																							</div>
																							
																						</span>
																						<br/>
																						<button  style={{width:'50%'}} className="btn btn-lg btn-success" onClick={e => this.acceptedMain(timing, i)}>ACCEPT</button>
																						<button  style={{width:'50%'}} className="btn btn-lg btn-danger" onClick={e => this.rejectedMain(timing, i)}>REJECT</button>
																		  </div>
																  </div>
														  </span>
														  </Jumbotron>
														})
													  
												}
											  </span>
											</div>
											{/*fetching the side component by importing blockfilter.js*/}  
											<div className="col-md-2" style={{backgroundColor:' #111'}} ><BlockFilter /></div>
									  </div>
							  </div>
							  
							  
							  <br/><br/> <br/>
							  {/*fetching the footer component by importing footer.js*/}
							  <FooterFormat/>
							</div>
						);
				}
		/*to show the modal for accepted jobs*/
		  acceptedMain(data, i) {
			  this.setState({details :data});
			  console.log(this.state.details);
			  this.setState({ showacceptedModal: true })
		  }
		  /*to show the modal for rejected jobs*/
		  rejectedMain(data, i) {
			  this.setState({details :data});
			  console.log(this.state.details);
			  this.setState({ showrejectedModal: true })
		  }
 }
 /*export*/
export default RecruiterPortal
