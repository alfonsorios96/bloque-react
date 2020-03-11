import React, { useState, useContext } from 'react';
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
const ThemeContext = React.createContext(themes.light);
  
const Toolbar = (props) => {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
const ThemedButton = () => {
    const theme = useContext(ThemeContext);
  
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
}

const HooksState = () =>  {
    //HOOK useState
    const [count, setCount] = useState(0);  
        
        
      return (
        <div>
            <ThemeContext.Provider value={themes.dark}>
                <Toolbar />
            </ThemeContext.Provider>
            <button onClick={() => setCount(count - 1)}>-</button>
                <span>El contador está a {count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      );
  }

export default HooksState;