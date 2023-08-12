import './navbarMain.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const NavbarMain = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary found" fixed="top">
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/public/Assets/images/travel.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        MyTinerary
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <LinkContainer to="/">
                            <Nav.Link>
                                Home
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cities">
                            <Nav.Link>
                                Cities
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form className="d-flex">      
                        <Button variant="outline-info"><FontAwesomeIcon icon={faCircleUser}/> Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMain