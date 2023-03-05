import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from "react-router-dom";



export default function NavBar() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/Register");
  }
  const handleClick = () => {
    navigate("/Login");
  }

  return (
      <div>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/Home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" style={{}}>
        <Nav
          className="me-auto my-2 my-lg-0 "
          style={{maxHeight: '100px',display:'flex',flex:1,alignItems:'center',justifyContent:'center'}}
          navbarScroll
        >
          <Nav.Link href="#">How it works</Nav.Link>
          <NavDropdown title="Services" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Reviews</Nav.Link>
          <Nav.Link href="#" disabled>FAQs</Nav.Link>
          <Nav.Link href="#" disabled>Contact</Nav.Link>
        </Nav>
        <Form className="d-flex">
        <Button onClick={handleClick} type="button"  variant="outline-success" style={{marginLeft:10,marginRight:20}}>Log in</Button>
        <Button onClick={handleOnClick}  type="button" variant="primary" style={{marginRight:30}}>Get started</Button>

        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      </div>
  )
}
