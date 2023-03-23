import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './NavigationComponent.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoSuperDev from "../../assets/images/LogoSuperDev.png";


const NavigationComponent = () => {
  return(
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
      <img src={LogoSuperDev} width= "170" height="100" className="LogoSuperDev"
              alt="React Bootstrap logo"></img>
          </Navbar.Brand>
        <Nav>
          <Link className="nav-link" to='/'> Home </Link>
          <Link className="nav-link" to='/Shop'> Shop </Link>
          <Link className="nav-link" to='/Articles'> Articles </Link>
          <Link className="nav-link" to='/Events'> Events </Link>
          <Link className="nav-link" to='/Music'> Music </Link>
          <Link className="nav-link" to='/About Us'> About Us </Link>
          <Link className="nav-link" to='/Horoscope'> Horoscope</Link>
          <Link className="nav-link" to='/Login'> Login</Link>
        </Nav>

      </Container>
    </Navbar>
  )
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
