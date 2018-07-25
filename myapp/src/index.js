import React from 'react';
import ReactDom from  'react-dom';
const Header=((props) => {
	return(
		<div>
		<h2 className="style">{props.headerbrand}</h2>
		</div>
		)
	
})
const Content=(()=>{
	const name=["karthick","aadhithyan","john","cooper"]
return(
		<div>
			<ul>
				{name.map( (n,i) => {
					return(
						<li key={i}>{n}</li>
						)
				} 	
				)}
			</ul>
		</div>
	)
	})
const Welcome=(() => {
		return(
		<div>
		<Header headerbrand="HomeAutomation" />
		<Content />
		</div>
		)
	
});
ReactDom.render(
	<Welcome />,
	document.getElementById('root')
	);

