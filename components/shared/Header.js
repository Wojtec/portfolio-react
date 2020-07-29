import React, { useState } from 'react';
import Link from 'next/link';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

const BsNavLink = (props) => {
const { route, title } = props;

  return (
    <Link href={route}>
        <a className="nav-link port-navbar-link">{title}</a>
    </Link>
    )

}
const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  className="port-navbar port-default absolute" color="transparent" light expand="md">
        <NavbarBrand  className="port-navbar-brand" href="/"><span className="logo">W</span> Poninski</NavbarBrand>
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
                    route="/portfolio"
                    title="Portfolio"
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
            </Nav>
            <NavbarText className="social-media">Social Media</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
