import React, { useState } from 'react';
//components
import Logo from './components/Logo/Logo.js';
import Menu from './components/Menu/Menu.js';
//style
import './App.css';

function App() {
  //state*********************************
  const [state, setState] = useState({
    menuOpen: false
  });
  //functions*****************************
  const handleClickLogo = open => {
    setState(state => ({ ...state, menuOpen: open }));
  };

  return (
    <div className="App">
      <Logo
        handleClickLogo={handleClickLogo}
        state={state}
      />
      <Menu
        state={state}
      />
    </div>
  );
}

export default App;
