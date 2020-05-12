import React ,{Component} from 'react';/*main component*/
import 'bootstrap/dist/css/bootstrap.css';/*in order to use bootstrap functionality*/
/*font awesome library*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch ,faFilter,faSort,faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
class BlockFilter extends Component{
	
  render(){
	  
	
    return(
    <div>
		<div className="container">
   
			<div className="row" style={{position:'fixed',zIndex:'99',backgroundColor:' #111',color:'white',width:'10%',top:'20%'}}>
			 
					  <div className="col-md-12"><FontAwesomeIcon icon={faSearch} style={{fontSize:'200%'}}/></div> 
					    <br/><br/> <br/><br/>
					  <div className="col-md-12"><FontAwesomeIcon icon={faFilter} style={{fontSize:'200%'}}/></div>
						 <br/><br/> <br/><br/>
					  <div className="col-md-12"><FontAwesomeIcon icon={faSort} style={{fontSize:'200%'}}/></div> 
					   
						 
			</div>
				  
		</div>
	</div>
    );
}
}
/*export*/
export default BlockFilter;

