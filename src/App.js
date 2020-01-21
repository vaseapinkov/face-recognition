import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navogation.js'
import Logo from './Components/Logo/Logo.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import Rank from './Components/Rank/Rank.js'
import Particles from 'react-particles-js'
import './App.css';

const particleOptions = {
		"particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	};

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Particles className="particles"
      	 params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
