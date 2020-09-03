import React, { useLayoutEffect } from 'react';
//components
import Logo from '../components/Logo/Logo';
import Menu from '../components/Menu/Menu';
//style
import './Main.css';

function Main(props) {
  //props***************************************
  const {
    menuOpen,
    menuSwitch,
    mobileSwitch,
    dehazer,
    openMenuAction,
    openGalleryAction,
    sliderOpenAction,
    aboutOpenAction,
    contactOpenAction,
    makeMobileAction,
    makeWideAction,
    dehazeAction,
    hazeAction
  } = props;

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 750) makeMobileAction();
      if (window.innerWidth > 750) makeWideAction();
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  });

  return (
    <div className="Main">
      <Logo
        handleClickLogo={openMenuAction}
        menuOpen={menuOpen}
      />
      <Menu
        dehazer={dehazer}
        menuOpen={menuOpen}
        menuSwitch={menuSwitch}
        mobileSwitch={mobileSwitch}
        openGalleryAction={openGalleryAction}
        sliderOpenAction={sliderOpenAction}
        aboutOpenAction={aboutOpenAction}
        contactOpenAction={contactOpenAction}
        dehazeAction={dehazeAction}
        hazeAction={hazeAction}
      />
    </div>
  );
}

export default Main;
