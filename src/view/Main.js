import React, { useLayoutEffect } from 'react';
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
      if (window.innerWidth < 750) dispatchAction({type: "small"});
      if (window.innerWidth > 750) dispatchAction({type: "wide"});
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  });

  return (
    <div className="main"
         onClick={() => globalState.isMobileMenuOpen ? dispatchAction({type: "haze"}) : null}>
      <Menu
        globalState={globalState}
        dispatchAction={dispatchAction}
      />
    </div>
  );
}

export default Main;
