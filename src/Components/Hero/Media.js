import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faLinkedin,
    faGoogle,
    faGithub

  } from "@fortawesome/free-brands-svg-icons";

function media(){
    return<div class="social-container">
      <a href="https://github.com/Wojtec"
        className="faGithub">
        <FontAwesomeIcon icon={faGithub} size="sm" />
      </a>
      <a href="https://github.com/Wojtec"
        className="faGoogle">
        <FontAwesomeIcon icon={faGoogle} size="sm" />
      </a>
      <a href="https://github.com/Wojtec"
        className="faLinked">
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
</div>

}
export default media;