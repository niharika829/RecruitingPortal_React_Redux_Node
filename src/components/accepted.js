import React ,{Component} from 'react'; /*main component*/
import 'bootstrap/dist/css/bootstrap.css';/*in order to use bootstrap functionality*/
import Modal from "react-animated-modal";/*animated modal*/
import Jumbotron from 'react-bootstrap/Jumbotron';/*to use jumbotron*/
/*font awesome library*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase,faAddressCard,faCalendar,faUser,faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
/*importing files created in the same folder*/
import FooterFormat from  './footer.js';
import BlockFilter from  './blockfilter.js';
import company from './images/company.jpg';
import back from './images/back.jpg';

class Accepted extends Component{

	    
  state = {
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
					<div className="container">
						<div className="row">
								<div className="col-md-10">
									  <span className="timing-list-container" style={{position:'relative',marginTop:'30%'}}>
										  {
											  /*fetching data of the job one by one from timingList array by mapping*/
											  this.state.timingList.map((timing,i) => {
												  return <Jumbotron style={{backgroundImage: `url(${back})`,backgroundRepeat: 'no-repeat',backgroundAttachment: 'fixed',backgroundSize: '100% 100%'}}>
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
																				<div className="col-md-6"><FontAwesomeIcon icon={faCalendar} style={{fontSize:'300%'}}/>{timing.job_type}</div>
																			</span>
																			<hr style={{border:'2px groove black',width:'60%'}}/>  
																			<span className="row">
																				<div className="col-md-6"> <FontAwesomeIcon icon={faUser} style={{fontSize:'300%'}}/> {timing.candidate}</div>
																				<div className="col-md-6"> <FontAwesomeIcon icon={faMoneyBillAlt} style={{fontSize:'300%'}}/> {timing.stripend}</div>
																				
																			</span><br/>
																			 <button style={{width:'30%'}} type="button" class="btn btn-lg btn-success" disabled>accepted</button>
																		
															  </div>
													  </div>	
												  </span>
												  </Jumbotron>
												  
											  })
										  }
									  </span>
								</div>
								{/*fetching the side component by importing blockfilter.js*/}
								<div className="col-md-2" style={{backgroundColor:'#111'}} ><BlockFilter /></div>
						  </div>
					  </div>
					  
					  
					  {/*fetching the footer component by importing footer.js*/}
					  <br/><br/> <br/>
					  <FooterFormat/>
				  </div>
			  );
			}

 }
 /*export*/
export default Accepted

