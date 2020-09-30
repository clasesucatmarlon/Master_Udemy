import React, { Component } from 'react';

// Importar componentes propios


class Pelicula extends Component {
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

                <div className="clearfix"></div>
            </article>
        )
    }
}

export default Pelicula;