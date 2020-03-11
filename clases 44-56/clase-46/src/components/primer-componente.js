import React, { Component } from 'react';
/*Se importa la libreria React y Component que es donde desciende todo
para poder crear Componentes */
/*
En React los componentes deben iniciar con Mayusculas:
*/
class PrimerComponente extends Component {
  render() {
    return (
      <h1>
        Hola, Bienvenido al framework de REACT!
      </h1>
    );
  }
}

export default PrimerComponente;
/*
Los componentes son totalmente independientes y contienen
su propio comportamiento, un estado y el contenido a renderizar.
 Éstos,  contienen elementos que se pueden anidar, igual que
 podemos anidar componentes
 */
