import React from 'react';

class Keys extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          joshs: [{  name: "Josh", }, { name: "Joshina", }, {  name: "Notjosh", }],
          numbers: props.numbers,
          listItems: null,
          nameSelected: ''
        }
        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount(){
        const listItems = this.state.numbers.map((number) =>
            <li key={number.toString()}>
              {number}
            </li>
          )
        this.setState({ listItems: listItems  })
    }

    onSelect(event) {
        const selectedIndex = event.target.options.selectedIndex;
        
        this.setState({ nameSelected: event.target.options[selectedIndex].getAttribute('data-key')});
    }
    
    render(){
        return (
        <div>
            <h2>Keys</h2>
            
            { this.state.listItems }
            <div>
            <select onChange={this.onSelect}>
                { this.state.joshs.map((person, index) => ( 
                    <option key={ index + 1} data-key={ index + 1}>{person.name}</option>)
                )}          
            </select> 
            select Name: { this.state.nameSelected }
            </div>
        </div>
        );
    }

}

export default Keys;