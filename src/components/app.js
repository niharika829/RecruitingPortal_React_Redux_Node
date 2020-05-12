import React, { Component } from 'react'; /*main component*/
import 'bootstrap/dist/css/bootstrap.css';/*in order to use bootstrap functionality*/
/*in order to use dropdown functionality*/
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
/*for routing support*/
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
/*font awesome library*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faEnvelope,faUserCircle } from '@fortawesome/free-solid-svg-icons'

/*importing files created in the same folder*/
import Jobs from './RecruiterPortal'; 
import Candidate from './addcandidate.js'; 
import Accepted from './accepted.js'; 
import Rejected from './rejected.js';
import Help from './helpdesk'; 
import Feedback from './feedback'; 
import Tutorial from './tutorial'; 
import logo from './images/logo.JPG';
import  './header.css';
class App extends Component { 
	constructor(){
		 /*binding the functions inside constructor*/
	   super();
	   this.shootopen = this.shootopen.bind(this);
	   this.shootclose = this.shootclose.bind(this);
	 }
 
	 state = {
		 name:'  Root',
		 width:true,
		 showStore:false,
		 logo: "./images/logo.jpeg"
		};
		render() { 
					var container_style={
						/*by using this variable named container_style we can apply styling on any tag*/
					position:'absolute',
					top:'30%',
					}
					var container_image={
						/*by using this variable named container_image we can apply styling on any tag*/
						borderRadius: '2% 40%'
					}
					return ( 
					<div style={{backgroundColor:'#993d00'}}>
						{/*routing*/}
							<Router>
							 <div><span style={{fontSize:'40px'}}className="text_transformation" onClick={this.shootopen}>&#9776;</span>  <img src={logo} style={container_image}/>
							
								<span  style={{float:'right'}}>
										<Dropdown>
											<Dropdown.Toggle variant="success" id="dropdown-basic" >
												<FontAwesomeIcon icon={faUserCircle } style={{fontSize:'100%'}}/>
												{this.state.name}
											</Dropdown.Toggle>

											<Dropdown.Menu>
								   
										
												<div className="App"> 
												{/*user will choose the desired option and link in the url will get changed accordingly*/}
															 <Dropdown.Item><Link to="/" className="btn btn-lg btn-success"style={{width:'100%'}}>Live Jobs</Link> </Dropdown.Item>
														
															 <Dropdown.Item><Link to="/candidate" className="btn btn-lg btn-success" style={{width:'100%'}}>Add Candidates</Link> </Dropdown.Item>
														
															 <Dropdown.Item><Link to="/accepted" className="btn btn-lg btn-success" style={{width:'100%'}}>Accepted Jobs</Link> </Dropdown.Item>
														
															 <Dropdown.Item><Link to="/Rejected" className="btn btn-lg btn-success" style={{width:'100%'}}>Rejected Jobs</Link> </Dropdown.Item>
														
														
												</div> 
									
											</Dropdown.Menu>
										</Dropdown>
								</span>
								<FontAwesomeIcon icon={faEnvelope} style={{float:'right',fontSize:'250%',marginRight:'30px'}}/>
								<FontAwesomeIcon icon={faUsers} style={{float:'right',fontSize:'250%',marginRight:'30px'}}/>
							 </div>
							 <div id="mySidenav" className="sidenav" style={{display: this.state.showStore ? 'block' : 'none', width:this.state.width?'0%':'100%' }}>
										<a  className="closebtn" onClick={this.shootclose} >&times;</a>
										<div className="container" style={container_style}>
												<div className="row">
														<div className="col-md-3" ></div>
														<div className="col-md-3" >
																<img src={logo} style={container_image}/>
														</div>
														<div className="vertical" ></div>
														<div className="col-md-3" >
																<Link to="/help" onClick={this.shootclose}><b>HELPDESK</b></Link> 
																<Link to="/feedback" onClick={this.shootclose}><b>FEEDBACK</b></Link> 
																<Link to="/tutorial" onClick={this.shootclose}><b>TUTORIAL</b></Link> 
																				 
														</div>
														<div className="col-md-3" ></div>
												</div>
										</div>
								</div>
					 
					           {/*once the url changes,switch will extract the link and returns the component accordingly*/}
								<Switch> 
										<Route exact path='/' component={Jobs}></Route> 
										<Route exact path='/candidate' component={Candidate}></Route> 
										<Route exact path='/accepted' component={Accepted}></Route> 
										<Route exact path='/Rejected' component={Rejected}></Route> 
										<Route exact path='/help' component={Help}></Route> 
										<Route exact path='/feedback' component={Feedback}></Route> 
										<Route exact path='/tutorial' component={Tutorial}></Route> 
								</Switch> 
							</Router>
					</div>
					
					
					
				); 
		}
		/*to open the side navigation*/
		shootopen(){
			this.setState({ showStore: true,width:false })
		}
		/*to close the side navigation*/
		shootclose(){
			this.setState({ showStore: false ,width:true})
		} 
} 
/*export*/
export default App; 
