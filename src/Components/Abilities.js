import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faCode,
    faMobile,
    faCogs,
    faDatabase,
    faCloud,
    faDollarSign

  } from "@fortawesome/free-solid-svg-icons";

  function Abilities(){
        return (
            <div>
            <h1>Abilities</h1>
        <div className="faCode">
        <FontAwesomeIcon icon={faCode} size="x2" />
        <p>About code</p>
      </div>
      <div className="faMobile">
        <FontAwesomeIcon icon={faMobile} size="x2" />
        <p>About mobile</p>
      </div>
      <div className="faCogs">
        <FontAwesomeIcon icon={faCogs} size="x2" />
        <p>About Back-End</p>
      </div>
      <div className="faDatabase">
        <FontAwesomeIcon icon={faDatabase} size="x2" />
        <p>About Database</p>
      </div>
      <div className="faCloud">
        <FontAwesomeIcon icon={faCloud} size="x2" />
        <p>About Cloud</p>
      </div>
      <div className="faPayment">
        <FontAwesomeIcon icon={faDollarSign} size="x2" />
        <p>About Payment Service</p>
      </div>
            </div>
        )

}

export default Abilities;