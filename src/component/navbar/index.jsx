import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="fs-2" >React-Porfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <li>
              <Link className="text-warning fs-7 p-3 text-decoration-none" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-warning fs-7 p-3 text-decoration-none" to="/signup">
                SignUp
              </Link>
            </li>
            <li>
              <Link className="text-warning fs-7 p-3 text-decoration-none " to="/ecommerce">
                E-commerce
              </Link>
            </li>
            <li>
              <Link className="text-warning fs-7 p-3 text-decoration-none " to="/counter">
                Counter
              </Link>
            </li>
            <li>
              <Link className="text-warning fs-7 p-3 text-decoration-none " to="/todo">
                To-Do
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
