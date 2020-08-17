import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export class NavbarMain extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="white">
          <Navbar.Brand href="/">
            <img className="asset-logo" src="./images/charitydapp.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">
                <img className="event-img" src="./images/plusevent.png" /> EVENT
              </Nav.Link>
              <Nav.Link href="#deets">
                <img className="stat-img" src="./images/bar-chart.png" />
                STATS
              </Nav.Link>
              <Nav.Link className="right-border" href="#deets">
                <img className="event-img" src="./images/stats.png" />
                STATISTICS
              </Nav.Link>
              <Nav.Link className="btn-border" href="#deets">
                <img className="wallet-img" src="./images/wallet.png" />
                Login with wallet
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
