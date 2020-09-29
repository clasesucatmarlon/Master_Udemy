
import React, {Component} from 'react'; // usando destructoring Component

import '../assets/css/micomponente.css'

class MiComponente extends Component { // creando componente
    render() {

        let data = {
            nacionalidad: "Venezolana",
            edad: 47,
            deportes: ["Basqueball", "Fútbol", "Tenis"] 
        }

        return (
            <div className="mi-componente">
                <h1>Hola tengo nacionalidad {data.nacionalidad}</h1>
                <h1>Mi edad es de {data.edad} años y los deportes que practico son:</h1>
                <ol>
                {
                    data.deportes.map(function (deporte, i) {
                        return (
                            <p key={i} className="lista">{deporte}</p>
                        )
                    })
                }
                </ol>
            </div>
        )
    }
}

export default MiComponente;