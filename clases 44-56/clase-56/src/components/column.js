import React from 'react';

class Columns extends React.Component {
  
    render(){
        return(
            <React.Fragment>
            {this.props.items.map( (item, index) => (
                <tr key={index}>
                    <td>{ item.name }</td> 
                    <td>{ item.level }</td> 
               </tr>
            ))}  
            </React.Fragment>
        )
    }
}

export default Columns;