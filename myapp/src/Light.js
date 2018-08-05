import React,{Component} from 'react';
import Bulboff from './img/bulboff.jpg';
import Bulbon from './img/bulbon.jpg';

let changebulb=()=>{
	let b_on=document.getElementById('bulboff');
	b_on.src={Bulbon};
}

class Light extends Component{
	render(){
		return(
			 <div>
        <h2>Automate your house lights</h2>
        <p>We provide home automation for lights like increasing the brightness for your mood and automatically change the color of lights</p>
 		
        <p>Home automation at low price</p>
        <img src={Bulboff} id="bulboff" alt="bulboff" onClick={this.changebulb} />
         </div>
			);
	}
}

export default Light;