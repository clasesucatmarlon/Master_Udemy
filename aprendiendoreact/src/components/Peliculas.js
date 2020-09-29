import React, { Component} from 'react';

// Iportat componentes propios
import MensajeEstatico from './MensajeEstatico';

class Peliculas extends Component {
    render () {
        return (
            <div id="peliculas">
                <h4>Soy el componente de películas</h4>
                <MensajeEstatico />
            </div>
        )
    }
}

export default Peliculas;