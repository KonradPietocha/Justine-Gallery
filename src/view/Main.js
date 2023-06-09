import React, { useLayoutEffect } from 'react';
import { MOBILE_MENU, MOBILE_MODE } from '../redux/constant';
//components
import Menu from '../components/Menu/Menu';
//style
import './main.css';

function Main(props) {
  //props***************************************
  const {
    globalState,
    dispatchAction
  } = props;

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 750) dispatchAction({type: MOBILE_MODE.OPEN});
      if (window.innerWidth > 750) dispatchAction({type: MOBILE_MODE.CLOSE});
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  });

  return (
    <div className="main"
         onClick={() => globalState.isMobileMenuOpen ? dispatchAction({type: MOBILE_MENU.CLOSE}) : null}>
      <Menu
        globalState={globalState}
        dispatchAction={dispatchAction}
      />
    </div>
  );
}

export default Main;
