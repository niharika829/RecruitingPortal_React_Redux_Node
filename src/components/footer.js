import React ,{Component} from 'react';/*main component*/
class Footer extends Component{
	
  render(){
	    var x={
			/*by using this variable named x we can apply styling on any tag*/
			backgroundColor: 'black',
			height:"20%",
			position: 'relative'
			
		}
	
		return(
			<div id="foot" style={ x }>
			<br/>
			<p style={{fontSize: '30px',textAlign:'center',color:'white'}}>&copy; 2020 JobGlobe</p>
			<br/>
			</div>
			);
		}
}
/*export*/
export default Footer;


