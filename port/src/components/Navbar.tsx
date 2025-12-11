import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function MyNavbar() {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <Navbar expand="lg" className={`bg-body-tertiary `}>
      <Container className="nav">
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavClick("/")}>Home</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link as={Link} to="/experience">
              Experience
            </Nav.Link>
            <NavDropdown.Divider />
            <NavDropdown
              title="Projects"
              id="basic-nav-dropdown"
              className="Organizations"
            >
              <NavDropdown.Item onClick={() => handleNavClick("/Hackathons")}>
                Hackathons
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick("/SFU")}>
                Simon Fraser University
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick("/Esports")}>
                SFU Esports
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick("/Research")}>
                Research
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Medpack Technologies
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleNavClick("/projects")}>
                Everything
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Divider />
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
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                SFU Esports
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Simon Fraser University
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Medpack Technologies
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
