import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    const heightData = "5rem";
    return (
        <header style={{marginBottom:heightData}}>
            <Navbar expand="lg" className="header" fixed="top" style={{height: heightData}} bg="dark">
                <Container fluid>
                    <Navbar.Brand href="/" style={{color:"white"}}>Activity planner</Navbar.Brand>
                    <Nav>
                        <Nav.Link style={{color:"white"}} href="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
        )

}

export default Header;