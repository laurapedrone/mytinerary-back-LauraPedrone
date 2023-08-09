import './navbarMain.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarMain = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary found" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#">My Tinerary</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Cyties</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-info">Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavbarMain