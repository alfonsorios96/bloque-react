import React from 'react';
//import StyleSheet from 'react-style';


const styles = {
    button: {
      padding: '1em',
      background: 'blue',
      border: 'none',
      borderRadius: '30px',
  
      ':hover': {
        border: '1px solid black'
      },
    },
    primary: {
      background: 'green'
    },
    warning: {
      background: 'yellow'
    },
  };

class ButtonWithStyle extends React.Component {

    constructor(){ 
        super(); 
        this.state = { 
            sayings: "",
            sayings2: ""
        }; 
       } 
    
    update(e){ 
        this.setState({ sayings: this.refs.anything.value})
    }

    updateCB(e){
        this.setState({ sayings2: this.a.value })
    }

    render(){
        return (<div>
                <h2 style={{ color: "red" }}>Styles in React</h2>
                <button style={styles.button}>Confirm</button>
                <div style={styles.warning}>
                    <h2>Use Refs</h2>
                    Mukul Says 
                    <input type="text" ref="anything"
                    onChange = {this.update.bind(this)}/> 
                    <br/>
                    <em>{this.state.sayings}</em> 
                    <br />
                    input refs callback
                    <input type="text" 
                        ref={(call_back) => {this.a = call_back}} 
                        onChange={this.updateCB.bind(this)}/> 
                    <br/> 
                    <em>{this.state.sayings2}</em> 
                </div>
                
        </div>);
            
    }
}

/*
const styleReact = StyleSheet.create({
    primary: {
        background: 'green'
      },
      warning: {
        background: 'yellow'
      },
      button: {
        padding: '1em'
      },
      // media queries
      '@media (max-width: 200px)': {
        button: {
          width: '100%'
        }
      }
})
*/
export default ButtonWithStyle;