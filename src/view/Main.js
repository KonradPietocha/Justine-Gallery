import React from 'react';
//components
import Logo from '../components/Logo/Logo';
import Menu from '../components/Menu/Menu';
import Gallery from '../components/Gallery/Gallery';
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
      <Gallery />
    </div>
  );
}

export default Main;
