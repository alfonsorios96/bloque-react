import React from "react";

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
      /*
           El estado es similar a las props,
           pero es privado y está completamente
            controlado por el componente.
      */
    }
  
    render() {
      return (
        <div>
          <h1>Hola {this.props.name } con Estado!!</h1>
          // name siempre tendra el mismo valor
          <h2>La hora es : {this.state.date.toLocaleTimeString()}.</h2>
          // date cambiara conforme cambie el tiempo en el que este ejecutando
        </div>
      );
    }
    /*
      La diferencia entre una prop y un state es que en el props no se
      pueden cambiar los valores de estos, mientras que state es un valor
      que puede ser definido con el tiempo y que puede cambiar su valor.
    */
  }

  export default Clock;