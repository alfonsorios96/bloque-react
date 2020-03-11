import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    /*
    Siempre se debe de mandar a llamar el
    constructor padre
    */
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    /*
    Surge cuando el componente ha sido renderizado
    en el DOM
    => Permite llamar al metodo que cambia el
    estado
    */
  }

  componentWillUnmount() {
    /*
      Otro metodo del ciclo de vida, el cual
      permite destruir el intervalo creado y evitar
      que el componente siga consumiendo recursos
    */
    clearInterval(this.timerID);
  }

  tick() {
    /*
      Esta es la forma adecuada de cambiar el
      estado de una propiedad ( setState)
      por que de lo contrario no volvera a
      renderizar el componente
    */
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is the actual time {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

