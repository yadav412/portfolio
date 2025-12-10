import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";

function MyNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('Current location:', location.pathname);
    console.log('Navigating to:', path);
    navigate(path);
    console.log('After navigate, location should be:', path);
  };

  return (
    <Navbar expand="lg" className={`bg-body-tertiary `}>
      <Container className="nav">
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={(e) => { e.preventDefault(); handleNavClick("/", e); }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/experience">
              Experience
            </Nav.Link>
            <NavDropdown
              title="Projects"
              id="basic-nav-dropdown"
              className="Organizations"
            >
              <NavDropdown.Item>
                <Link to="/Hackathons" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
                  Hackathons
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/SFU" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
                  Simon Fraser University
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Esports" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
                  SFU Esports
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Research" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
                  Research
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Medpack Technologies
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
                  Everything
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
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
