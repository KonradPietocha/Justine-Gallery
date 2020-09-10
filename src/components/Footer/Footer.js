import React from "react";
//icons
import gmail from '../../icons/gmail.ico';
import linkedin from '../../icons/linkedin.jpg';
//style
import './footer.css';

function Footer() {

  return (
    <>
      <footer className="footer">
        <p>Author: KoNrAd PiĘtOcHa</p>
        <a href="mailto:konrad.pietocha80@gmail.com">
          <img
            src={gmail}
            alt="gmail"
            height="25px"
          />
        </a>
        <a href="https://pl.linkedin.com/in/konrad-piętocha-48506b193">
          <img
            src={linkedin}
            alt="linkedin"
            height="25px"
          />
        </a>
      </footer>
    </>
  )
}

export default Footer;
