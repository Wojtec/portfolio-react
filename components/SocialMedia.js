import { Row } from 'reactstrap';
import React, { useEffect, useState } from "react";

function whatsapp() {
const [link, setLink] = useState(null);
const bigScreen =  "https://web.whatsapp.com/send?phone=34602410491";
const mobileScreen = "https://wa.me/34602410491"
  useEffect(() => {
      if(window.screen.width === 1920){
           setLink(
           <a target="_blank" href={`${bigScreen}`}>
           <span className="fa-stack fa-lg">
               <i className="fas fa-circle fa-stack-2x"></i>
               <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
           </span>
           </a>
           );
      }
      if(window.screen.width <= 991){
        setLink(
            <a target="_blank" href={`${mobileScreen}`}>
            <span className="fa-stack fa-lg">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
            </span>
            </a>
            );
      }
  },[]);

  return link;
}

const SocialMedia = () => {
    return(
        <Row>
        <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
            <li className="list-inline-item">
                <a  target="_blank" href="https://www.linkedin.com/in/poninski/">
                <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
                </a>
            </li>
            <li className="list-inline-item">
                <a target="_blank" href="mailto:poninski.w@gmail.com">
                <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-google fa-stack-1x fa-inverse"></i>
                </span>
                </a>
            </li>
            <li className="list-inline-item">
                <a  target="_blank" href="https://github.com/Wojtec">
                <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
                </a>
            </li>
            <li className="list-inline-item">
                {whatsapp()}
            </li>
            </ul>
        </div>
        </Row>
    )
}


export default SocialMedia;