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
      <section className="abilities-container">
        <h1>Abilities</h1>
        <div className="row">
          <div className="faCode col-2">
            <FontAwesomeIcon icon={faCode} size="x2" />
            <p>About code</p>
          </div>
          <div className="faMobile col-2">
            <FontAwesomeIcon icon={faMobile} size="x2" />
            <p>About mobile</p>
          </div>
          <div className="faCogs col-2">
            <FontAwesomeIcon icon={faCogs} size="x2" />
            <p>About Back-End</p>
          </div>
          <div className="faDatabase col-2">
            <FontAwesomeIcon icon={faDatabase} size="x2" />
            <p>About Database</p>
          </div>
          <div className="faCloud col-2">
            <FontAwesomeIcon icon={faCloud} size="x2" />
            <p>About Cloud</p>
          </div>
          <div className="faPayment col-2">
            <FontAwesomeIcon icon={faDollarSign} size="x2" />
            <p>About Payment Service</p>
          </div>
        </div>
            </section>
        )

}

export default Abilities;