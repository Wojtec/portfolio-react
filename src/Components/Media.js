import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faLinkedin,
    faGoogle,
    faGithub

  } from "@fortawesome/free-brands-svg-icons";

function media(){
    return(
    <div className="social-container">
      <a href="https://github.com/Wojtec"
        className="faGithub">
        <FontAwesomeIcon icon={faGithub} size="sm" />
      </a>
      <a href="https://github.com/Wojtec"
        className="faGoogle">
        <FontAwesomeIcon icon={faGoogle} size="sm" />
      </a>
      <a href="https://www.linkedin.com/in/poninski"
        className="faLinked">
        <FontAwesomeIcon icon={faLinkedin} size="sm" />
      </a>
</div>
    )

}
export default media;