import React from 'react';

class Conditional extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showBotton: true
        }
    }

    handleClick(event) {
        console.log('Se hizo click', event);
        this.setState({ showBotton: !this.state.showBotton})
    }
    
    render(){
        return (
        <div>
            <h2>Conditional</h2>
            
            { this.state.showBotton ? <button onClick={() => this.handleClick() }>Clickéame True</button> : <button onClick={() => this.handleClick()}>Clickéame False</button> }
        </div>
        );
    }

}

export default Conditional;