import React ,{Component} from 'react';/*main component*/
import Jumbotron from 'react-bootstrap/Jumbotron';/*to use jumbotron*/
import 'bootstrap/dist/css/bootstrap.css';/*in order to use bootstrap functionality*/
class Helpdesk extends Component{

  render(){
    return(
		  <div>
			<Jumbotron>
				<h1>HELPDESK</h1>
				<p>
				{/*link to github repositories*/}
				have a look at my github repositories:-
				<a href="https://github.com/niharika829?tab=repositories" className="btn btn-success">here</a>
				</p>
			</Jumbotron>
		  </div>
    );
  }


}
/*export*/
export default Helpdesk
