import React, { Component } from 'react';

// Estilos CSS
import './assets/css/App.css';

// componentes propios
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';

class App extends Component {
	
	render() {
		var buttonString = 'Ir al blog';
		
		return (
			<div className="App">
				<Header />
				<Slider 
					title='Bienvenido al Curso de React'
					btn={buttonString}
				/>

				<div className="center">

					<Peliculas/>
					<Sidebar />
					
					<div className="clearfix"></div>

				</div> {/* final div center */}
				<Footer />
			</div>
		);
	}
}

export default App;
