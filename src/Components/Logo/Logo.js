import React from 'react';
import Tilt from 'react-tilt';
import Face from './Face.png'
import './Logo.css'

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
				 <div className="Tilt-inner pa4"> 
				 	<img style={{paddingTop: '9px', paddingLeft: '9px'}} alt="logo" src={Face} /> 
				 </div>
			</Tilt>
		</div>
	);
}

export default Logo