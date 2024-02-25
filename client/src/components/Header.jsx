import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

  return (
    <>
      <Navbar expand="lg" className=" mb-3 bg-gray-400">
        <Container fluid>
          <Navbar.Brand href="/" className='' >Escapade</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Collapse id="navbarNav" className="justify-content-end">
            <Nav className='mx-auto'>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="events">Events</Nav.Link>
              <Nav.Link href="sponsors">Sponsors</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="events">Events</Nav.Link>
              <Nav.Link href="sponsors">Sponsors</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
