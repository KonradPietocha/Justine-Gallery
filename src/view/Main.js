import React, { useLayoutEffect } from 'react';
//components
import Logo from '../components/Logo/Logo';
import Menu from '../components/Menu/Menu';
//style
import './main.css';

function Main(props) {
  //props***************************************
  const {
    enlarger,
    indexer,
    menuOpen,
    menuSwitch,
    mobileSwitch,
    dehazer,
    openMenuAction,
    menuSwitchAction,
    makeMobileAction,
    hazeAction,
    changeIndexAction,
    enlargeImageAction
  } = props;

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 750) makeMobileAction("small");
      if (window.innerWidth > 750) makeMobileAction("wide");
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  });

  return (
    <div className="main">
      <Logo
        handleClickLogo={() => openMenuAction("open")}
        menuOpen={menuOpen}
      />
      <Menu
        enlarger={enlarger}
        indexer={indexer}
        dehazer={dehazer}
        menuOpen={menuOpen}
        menuSwitch={menuSwitch}
        mobileSwitch={mobileSwitch}
        openGalleryAction={() => menuSwitchAction("galleryOpen")}
        sliderOpenAction={() => menuSwitchAction("sliderOpen")}
        aboutOpenAction={() => menuSwitchAction("aboutOpen")}
        contactOpenAction={() => menuSwitchAction("contactOpen")}
        hazeAction={hazeAction}
        changeIndexAction={changeIndexAction}
        enlargeImageAction={enlargeImageAction}
      />
    </div>
  );
}

export default Main;
