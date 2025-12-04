import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <NavDropdown
              title="Organizations"
              id="basic-nav-dropdown"
              className="Organizations"
            >
              <NavDropdown.Item href="#action/3.1">
                Persepolis Technologies INC
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Rubber Duck Productions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                SFU Esports
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Medpack</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
