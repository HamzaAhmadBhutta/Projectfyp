import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {logo} from '../Assets/Img/logo.png'

const  ColorSchemesExample=()=> {
  return (
    <> 
      
      <Navbar bg="light" variant="light" >
         
        <Container>
          <Navbar.Brand href="/">Tech Bazaar</Navbar.Brand>
          <Nav className="ml -auto">
            <Nav.Link href="/cart"><i className='fas fa-shopping-cart mx-1'></i>Cart</Nav.Link>
            <Nav.Link href="/login"><i className='fas fa-user mx-1'></i>Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

  );
}

export default ColorSchemesExample;