import React,{Component} from 'react';
import wing from './img/fan.png';
class Fan extends Component{
	constructor(props){
		super(props)
			this.state={
			 Fanon : false,
			 Speed : 'rotate0'
			}
	}

	renderFan = () => {
		if(this.state.Fanon){
			return <img src={wing} width='300px' height='300px' alt='fan' className='rotate0' 
			/>
		}
		else if(this.state.Speed==='rotate1'){
			return <img src={wing} width='300px' height='300px' alt='fan' className={this.state.Speed}
			/>
		}
		else if(this.state.Speed==='rotate2'){
			return <img src={wing} width='300px' height='300px' alt='fan' className={this.state.Speed}
			/>
		}
		else if(this.state.Speed==='rotate3'){
			return <img src={wing} width='300px' height='300px' alt='fan' className={this.state.Speed}
			/>
		}
		else if(this.state.Speed==='rotate4'){
			return <img src={wing} width='300px' height='300px' alt='fan' className={this.state.Speed}
			/>
		}
		else {
			return <img src={wing} width='300px' height='300px' alt='fan'
			/>
		}
	}
	render(){
		return(
			 <div>
        <h2>Automate your Fan for wind</h2>
        <p>We provide home automation for fans</p> 
        <p>Home automation at low price</p>
        <div className='container'>
        {this.renderFan()}
        </div>
        <div className="container"><br/><br/>
        <button className='btn btn-sm btn-success' onClick={()=>this.setState({Fanon:true,Speed:'rotate0'})}>ON</button>
        <button className='btn btn-sm btn-primary' onClick={()=>this.setState({Fanon:false,Speed:'rotate1'})}>1</button>
        <button className='btn btn-sm btn-primary' onClick={()=>this.setState({Fanon:false,Speed:'rotate2'})}>2</button>
        <button className='btn btn-sm btn-primary' onClick={()=>this.setState({Fanon:false,Speed:'rotate3'})}>3</button>
        <button className='btn btn-sm btn-primary' onClick={()=>this.setState({Fanon:false,Speed:'rotate4'})}>4</button>
        <button className='btn btn-sm btn-danger' onClick={()=>this.setState({Fanon:false,Speed:'norotate'})}>Off</button>
        </div>
      </div>
			);
	}
}

export default Fan;