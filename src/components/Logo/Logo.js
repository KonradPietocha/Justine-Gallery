import React from 'react';
//style
import './Logo.css';
//variables
const title = ["Galeria", "Justyśki"];

function Logo(props) {
  //props***************************************
  const { state, handleClickLogo } = props;
  //variables***********************************
  let title1 = title[0].split("");
  let title2 = title[1].split("");

  return (
    <>
      {state.menuOpen ? null :
        <header className="logo-header"
          onClick={() => handleClickLogo(true)}
        >
          <h1 className="title1">
            {title1.map((letter, index) => (
              <div
                key={index}
                className={`logo-letter${index}`}
              >
                {letter}
              </div>
            ))}
          </h1>
          <h1 className="title2">
            {title2.map((letter, key) => (
              <div
                key={key}
                className={`logo-letter${key + 2}`}
              >
                {letter}
              </div>
            ))}
          </h1>
        </header>
      }
    </>
  );
}

export default Logo;
