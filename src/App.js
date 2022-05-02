import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import About from "./Components/About";
import Achievements from "./Components/Achievements";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import "./Stylings/Navbar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Resume from "./Components/Resume";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <BrowserRouter>
      <div className="app">
        <div className="navigation">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2 className="navigation-header">Gagan Mahesh</h2>
          </Link>
          <div className="navigation-item-container">
            <Button variant="primary" onClick={handleShow}>
              Home
            </Button>

            <Offcanvas show={show} onHide={handleClose} className="navbar">
              <Offcanvas.Header closeButton closeVariant="white">
                <Offcanvas.Title className="navbar-header">
                  Navigation
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="navbar-body">
                  <Link to="/" className="navbar-item-link">
                    <div className="navbar-item">
                      <span className="navbar-item-text">Projects</span>
                    </div>
                  </Link>
                  <Link to="/about" className="navbar-item-link">
                    <div className="navbar-item">
                      <span className="navbar-item-text">About</span>
                    </div>
                  </Link>
                  <Link to="/resume" className="navbar-item-link">
                    <div className="navbar-item">
                      <span className="navbar-item-text">Resume</span>
                    </div>
                  </Link>
                  <Link to="/skills" className="navbar-item-link">
                    <div className="navbar-item">
                      <span className="navbar-item-text">Skills</span>
                    </div>
                  </Link>
                  <Link to="/achievements" className="navbar-item-link">
                    <div className="navbar-item">
                      <span className="navbar-item-text">Achievements</span>
                    </div>
                  </Link>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/achievements" element={<Achievements />} />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
