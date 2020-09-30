import React, { Component } from 'react';

// Componentes propios
import MiComponente from './MiComponente';


class SeccionPruebas extends Component {

    contador = 0;

    /*constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
    } */

    state = {
        contador: 0
    };

    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola soy {nombre}</h2>
                <h3>Tengo {edad} años</h3>
            </div>
        );
        return presentacion;
    }

    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render() {
        var nombre = "Marlon GARCIA"
        return (

            <section id="content">

                <h2 className="subheader">Últimos artículos</h2>

                <p>Aprendiendo React con Master React de Udemy </p>

                <h2 className="subheader">Funciones y JSX básico</h2>

                {this.HolaMundo(nombre, 47)}

                <h2 className="subheader">Componentes</h2>

                <section className="componentes">
                    <MiComponente />
                    <MiComponente />
                </section>

                <h2 className="subheader">Estados</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    {/* si NO usamos función flecha para definir método
                    <input type="button" value="Sumar" onClick={this.sumar.bind(this)} />
                    <input type="button" value="Restar" onClick={this.restar.bind(this)} /> */}
                    {/* si usamos función flecha para definir método, no se pasa con bind*/}
                    <input type="button" value="Sumar" onClick={this.sumar} />
                    <input type="button" value="Restar" onClick={this.restar} />
                </p>

            </section>

        )
    }
}

export default SeccionPruebas;