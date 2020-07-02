import React from 'react';
//components
import Logo from '../components/Logo/Logo';
import Menu from '../components/Menu/Menu';
//style
import './Main.css';

function Main(props) {
  //props***************************************
  const { menuOpen, openMenu } = props;

  return (
    <div className="Main">
      <Logo
        handleClickLogo={openMenu}
        menuOpen={menuOpen}
      />
      <Menu
        menuOpen={menuOpen}
      />
    </div>
  );
}

export default Main;
