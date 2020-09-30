import React, { Component } from 'react';

// Importar componentes propios


class Pelicula extends Component {
    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula);
    }

    render() {
        const { titulo, image } = this.props.pelicula;
        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo} />
                </div>

                <h2>{titulo}</h2>
                <span className="date">
                    Hace 5 minutos
            </span>
                <a href="#">Leer más</a>
                <button onClick={this.marcar}>
                    Marcar como favorita
                </button>

                <div className="clearfix"></div>
            </article>
        )
    }
}

export default Pelicula;