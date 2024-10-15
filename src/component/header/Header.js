import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    const heightData = "5rem";
    return (
        <header style={{marginBottom:heightData}}>
            <Navbar expand="lg" className="header" fixed="top" style={{height: heightData}} bg="dark">
                <Container fluid>
                    <Navbar.Brand style={{color:"white"}}>Activity planner</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
        )

}

export default Header;