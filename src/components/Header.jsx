import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../assets/stylesheets/components/Header.scss"

let Header = () => {

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary site-header">
                <Container>
                    <Link to="/" className='navbar-brand'>Home</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/">Home</Link>
                            <Link to="/detailpage">Product</Link>
                            <Link to="/cart">Cart</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>


    )
}

export default Header;