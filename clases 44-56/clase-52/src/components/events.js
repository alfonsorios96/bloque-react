import React from "react";

class EventsListenersDom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          messageListener: '',
          timesListener: 1,
          messageEvent: '',
          timesEvent: 1
        };
        this.handleEnter = this.handleEnter.bind(this);
       // this.handleKeyPress = this.handleKeyPress.bind(this);
      }
      
      componentDidMount() {
        document.addEventListener('keydown',  (event) => this.handleKeyPress(event));
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
      }

      handleClick(event) {
          event.preventDefault();
        this.setState({
          timesEvent: this.state.timesEvent + 1,
          messageEvent: `You clicked the button! ${ this.state.timesEvent }`
        });
      }
      
      handleEnter() {
        this.setState({
          timesListener: this.state.timesListener + 1,
          messageListener: `You pressed the enter key! ${ this.state.timesListener }`
        });
      }

      handleKeyPress(event) {
        if (event.keyCode === 13) {
          this.handleEnter();
        }
      }

      render() {
        return (
          <div>
            <h2>Events Listener DOM</h2>
            <button onClick={(event) => this.handleClick(event) }>Click Event</button>
            <h3>{this.state.messageEvent}</h3>
            <h2>Press enter</h2>
            <h3>{this.state.messageListener}</h3>
          </div>
        );
      }
}

export default EventsListenersDom