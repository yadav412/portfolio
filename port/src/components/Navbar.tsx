import { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Import assets
  const assets: Record<string, string> = import.meta.glob(
    "../assets/*.{png,jpg,jpeg,svg,webp}",
    { as: "url", eager: true }
  ) as Record<string, string>;

  const getAsset = (name: string) => {
    const key1 = `../assets/${name}`;
    return assets[key1] ?? assets[`./${key1}`] ?? null;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false); // Close sidebar after navigation
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar expand="lg" className="desktop-navbar bg-body-tertiary">
        <Container className="nav">
          <Navbar.Brand className="Brand" as={Link} to="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleNavClick("/")}>Home</Nav.Link>
              <Nav.Link as={Link} to="/experience">
                Experience
              </Nav.Link>
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

      {/* Mobile Sidebar - Hamburger Menu Button */}
      <button
        className={`sidebar-toggle mobile-only ${isScrolled ? "sidebar-toggle-hidden" : ""}`}
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Mobile Sidebar - Overlay */}
      {isOpen && <div className="sidebar-overlay mobile-only" onClick={closeSidebar} />}

      {/* Mobile Sidebar */}
      <nav className={`sidebar mobile-only ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo" onClick={closeSidebar}>
            <div className="sidebar-logo-icon">
              {getAsset("logo2.png") ? (
                <img src={getAsset("logo2.png")!} alt="Logo" />
              ) : (
                <span>Y</span>
              )}
            </div>
          </Link>
          <button
            className="sidebar-close"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="sidebar-divider"></div>
        <div className="sidebar-nav">
          <Link
            to="/"
            className="sidebar-link"
            onClick={() => handleNavClick("/")}
          >
            Home
          </Link>
          <Link
            to="/"
            className="sidebar-link"
            onClick={() => handleNavClick("/")}
          >
            About
          </Link>
          <Link
            to="/experience"
            className="sidebar-link"
            onClick={() => handleNavClick("/experience")}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="sidebar-link"
            onClick={() => handleNavClick("/projects")}
          >
            Projects
          </Link>
          <Link
            to="/"
            className="sidebar-link"
            onClick={() => handleNavClick("/")}
          >
            Skills
          </Link>
          <Link
            to="/"
            className="sidebar-link"
            onClick={() => handleNavClick("/")}
          >
            Education
          </Link>
          <Link
            to="/"
            className="sidebar-link"
            onClick={() => handleNavClick("/")}
          >
            Hobbies
          </Link>
          <Link
            to="/"
            className="sidebar-link"
            onClick={() => handleNavClick("/")}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;
