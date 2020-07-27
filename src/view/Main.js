import React from 'react';
//components
import Logo from '../components/Logo/Logo';
import Menu from '../components/Menu/Menu';
//style
import './Main.css';

function Main(props) {
  //props***************************************
  const { menuOpen, menuSwitch, openMenuAction } = props;

  return (
    <div className="Main">
      <Logo
        handleClickLogo={openMenuAction}
        menuOpen={menuOpen}
      />
      <Menu
        menuOpen={menuOpen}
        menuSwitch={menuSwitch}
      />
    </div>
  );
}

export default Main;
