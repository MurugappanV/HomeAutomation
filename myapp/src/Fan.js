import React,{Component} from 'react';
import wing from './img/fan.png';
class Fan extends Component{
	render(){
		return(
			 <div>
        <h2>Automate your Fan for wind</h2>
        <p>We provide home automation for fans</p> 
        <p>Home automation at low price</p>
        <img src={wing} width='300px' height='300px' alt='fan' className='rotate' />
      </div>
			);
	}
}

export default Fan;