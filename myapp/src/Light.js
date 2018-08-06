import React,{Component} from 'react';
import Bulboff from './img/bulboff.jpg';
import Bulbon from './img/bulbon.jpg';

class Light extends Component{
    constructor(props) {
        super(props)
        this.state = {lightOn : false}
    }

    renderBulb = () => {
        if(this.state.lightOn) {
            return <img src={Bulbon} id="bulbon" alt="bulbon" onClick={() => this.setState({lightOn : false})} />
        } else {
            return <img src={Bulboff} id="bulboff" alt="bulboff" onClick={() => this.setState({lightOn : true})} />
        }
    }
  
   
render(){
	let row=[];
    for(var i=0;i<4;i++){
    	row.push(this.renderBulb());
    }
    return(
       <div>
        <h2>Automate your house lights</h2>
        <p>We provide home automation for lights like increasing the brightness for your mood and automatically change the color of lights</p>
     
        <p>Home automation at low price</p>

        
        	{row}
        	
       
         </div>
      );
  }
}

export default Light;