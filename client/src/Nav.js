import React from 'react'
import {Navbar, Nav, Container, Button, Form} from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import Search from './Search';


function NavCom({ userData }){
 return(
    <div className='infoBar'>
   
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Smoke</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/storelist">Store</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/library">Library</Nav.Link>
            <NavDropdown title="Wallet" id="basic-nav-dropdown" > 
              <p>${userData.wallet}</p>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              /> 
              
            <Button variant="primary">Search</Button>
          </Form>
        </Container>
            
       
      </Navbar>

     
  

      </div>

)
}
export default NavCom;

