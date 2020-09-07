import React, { useLayoutEffect } from 'react';
//components
import Logo from '../components/Logo/Logo';
import Menu from '../components/Menu/Menu';
//style
import './Main.css';

function Main(props) {
  //props***************************************
  const {
    indexer,
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
    hazeAction,
    changeIndexAction
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
        indexer={indexer}
        dehazer={dehazer}
        menuOpen={menuOpen}
        menuSwitch={menuSwitch}
        mobileSwitch={mobileSwitch}
        openGalleryAction={openGalleryAction}
        sliderOpenAction={sliderOpenAction}
        aboutOpenAction={aboutOpenAction}
        contactOpenAction={contactOpenAction}
        hazeAction={hazeAction}
        changeIndexAction={changeIndexAction}
      />
    </div>
  );
}

export default Main;
