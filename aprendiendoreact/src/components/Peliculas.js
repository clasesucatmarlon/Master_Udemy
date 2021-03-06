import React, { Component } from 'react';

// Importat componentes propios
import Pelicula from './Pelicula';

class Peliculas extends Component {
    state = {
        peliculas: [
            { titulo: "Vengadores", image: "https://4.bp.blogspot.com/-2kq7UEcucks/VUc8LHki0NI/AAAAAAABHss/MNI3EPSWFLw/s1600/Vengadores_2012.jpg" },
            { titulo: "Ironman", image: "https://www.cinemascomics.com/wp-content/uploads/2020/06/iron-man-gemas-del-infinito-endgame-960x720.jpg.webp" },
            { titulo: "Pantera Negra", image: "https://1.bp.blogspot.com/-FjtFKuk369M/WTrE5ThVS4I/AAAAAAABgmw/MGjarWYeYKMwP-PJFhEvVA1hOeJoAy53gCLcB/s1600/pantera-negra-2018.jpg" }
        ],
        nombre: "Marlon García",
        favorita: {}
    };

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        /* var random = Math.floor(Math.random() * 3); */
        peliculas[0].titulo = "Vengadores starting"

        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula) => {
        console.log("Favorita marcada");
        console.log(pelicula);
        this.setState({
            favorita: pelicula
        });
    }

    render() {
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Películas</h2>
                <p>Selección de las películas favoritas de {this.state.nombre}</p>
                <p>
                    <button onClick={this.cambiarTitulo}>Cambiar Título</button>
                </p>

                {
                    this.state.favorita.titulo &&
                    <p className="favorita">
                        <strong>La película favorita es:</strong>
                        <span>{this.state.favorita.titulo}</span>
                    </p>
                }

                {/* Componente películas */}
                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (

                                <Pelicula key={i}
                                    pelicula={pelicula}
                                    marcarFavorita={this.favorita}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Peliculas;