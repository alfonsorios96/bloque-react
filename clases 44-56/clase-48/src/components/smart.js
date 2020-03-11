import React, { Component } from 'react'

export default class smart extends Component {
    constructor(props){
        super(props);
        this.state = {friends : []};
    }

    componentDidMount(){
        this.setState({ friends: this.props.friends })
    }

    render() {
        return (
            <div>
                <h2>Smart Component</h2>
                <ul>{ this.state.friends.map( friend => 
                        <li>{ friend }</li> )
                    }
                </ul>
            </div>
        )
    }
}
