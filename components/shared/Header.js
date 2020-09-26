import React, { useState, useEffect, useRef } from 'react';
import auth0 from '../../services/auth0';
import Link from '../../helpers/nextActiveNav';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';

const BsNavLink = (props) => {
  const { route, title } = props;
    return (
      <Link activeClassName="active" href={route}>
        <a className={ "nav-link port-navbar-link" }>{title}</a>
      </Link>
    )
}

const Login = () => {
  return (
    <span 
      onClick={auth0.login} 
      className="nav-link port-navbar-link pointer">
      Login
    </span>
  )
}

const Logout = () => {
  return (
    <span 
      onClick={auth0.logout } 
      className="nav-link port-navbar-link pointer">
      Logout
    </span>
  );
}

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { isAuthenticated, className }  = props;

  const [headerText, setHeader] = useState(false);
  

    useEffect(() => {

      const scrollActiveCallBack = window.addEventListener('DOMContentLoaded', () => {

        const options = {
          threshold: 0.5
        };

        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {

            const id = entry.target.id;
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
             
              document.querySelector(`.navbar-nav li a[href="${id}"]`).classList.add('active');
            } else {
              document.querySelector(`.navbar-nav li a[href="${id}"]`).classList.remove('active');
            }
          });
        }, options);

        // Track all sections that have an `id` applied
        document.querySelectorAll('section[id]').forEach((section) => {
          observer.observe(section);
        });
	
      });

      const scrollCallBack = window.addEventListener("scroll", () => {
        const header = document.getElementById("navbar");

        if (window.pageYOffset >= 80) {
          header.classList.add("navbar-sticky");
          header.classList.remove("absolute");
      
              setHeader(true);
            
        } else {
          header.classList.remove("navbar-sticky");
          header.classList.add("absolute");

              setHeader(false);
            
        }
      });

      return () => {
        window.removeEventListener("scroll", scrollCallBack);
        window.removeEventListener("DOMContentLoaded", scrollActiveCallBack);
      };

    }, []);
  
  return (
    <>
      <Navbar id="navbar" className={`port-navbar port-nav-base absolute ${className}`} light expand="md">
        <Container>
            <NavbarBrand  className="port-navbar-brand" href="/">
              <div className="logo-container">
                <div className={headerText ? "logo-container-logo navbar-rotate" : "logo-container-logo"}>
                  W
                </div>
                <div className="logo-container-text">
                  Poninski
                </div>
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem className="port-navbar-item">
                      <BsNavLink
                            route="/"
                            title="Home"
                        />
                  </NavItem>
                  <NavItem className="port-navbar-item">
                      <BsNavLink
                          route="/about"
                          title="About"
                      />
                  </NavItem>
                  <NavItem className="port-navbar-item">
                      <BsNavLink
                          route="/projects"
                          title="Projects"
                      />
                  </NavItem>
                  <NavItem className="port-navbar-item">
                      <BsNavLink
                          route="/blog"
                          title="Blog"
                      />
                  </NavItem>
                  <NavItem className="port-navbar-item">
                      <BsNavLink
                          route="/cv"
                          title="Cv"
                      />
                  </NavItem>
                  { !isAuthenticated &&
                    <NavItem className="port-navbar-item">
                        <Login />
                    </NavItem>
                  }
                  { isAuthenticated &&
                    <NavItem className="port-navbar-item">
                        <Logout />
                    </NavItem>
                  }
                </Nav>
              </Collapse>
          </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
