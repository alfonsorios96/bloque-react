import React from 'react';


const  FunctionProps = (props) => {
        return (
            <div>
              <h2>Function Props</h2>
              <p>  Bienvenido {props.name}  {props.lastName} a {props.age} </p>
            </div>
        )
  
}

export default FunctionProps;
