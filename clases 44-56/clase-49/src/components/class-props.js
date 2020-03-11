import React, { Component } from 'react';


export default class ClassProps extends Component {
    render() {
        return (
            <div>
              <h2>Class Props</h2>
              <p>  Bienvenido {this.props.name}  {this.props.lastName} a {this.props.age} </p>
            </div>
        )
    }

}

/*
      DEfinicion de  ( > defaultProps <)
      Estos son definidos en todo caso que no sean colocados al componente
      al momento de hacer uso de else {
      }
    */
ClassProps.defaultProps = {
  name: 'Name Fake',
  lastName: 'fake',
  age: 23
}