import React, { Component } from 'react';

// Estilos CSS
import './assets/css/App.css';

// Iportat componentes propios
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Slider />

				<div className="center">
					<section id="content">
						<p>Aprendiendo React con Master React de Udemy </p>
					
						<section className="componentes">
							<MiComponente />
							<Peliculas />
						</section>
					</section>
					<Sidebar />
					<div className="clearfix"></div>
				</div> {/* final div center */}
				<Footer />
			</div>
		);
	}
}

export default App;
