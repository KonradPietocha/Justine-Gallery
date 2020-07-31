import React from 'react';
//component
import Title from '../Title/Title.js';
import LogoImg from '../LogoImg/LogoImg.js';
//style
import './Logo.css';

function Logo(props) {
  //props***************************************
  const { menuOpen, handleClickLogo } = props;
  //variables***********************************
  let title = ["Galeria", "Justyśki"];
  let title1 = title[0].split("");
  let title2 = title[1].split("");

  setTimeout(() => {
    handleClickLogo();
  }, 5000);

  return (
    <>
      {menuOpen ? null :
        <header className="logo-header"
          onClick={handleClickLogo}
        >
          <h1 className="title1">
            <Title
              title={title1}
              position={0}
            />
          </h1>
          <h1 className="title2">
            <Title
              title={title2}
              position={2}
            />
          </h1>
          <LogoImg />
        </header>
      }
    </>
  );
}

export default Logo;
