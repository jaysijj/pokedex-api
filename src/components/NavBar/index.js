import './NavBar.css'
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap'

const NavBar = ({setSprit, sprit, setBuscadorPkm, setCurrentGeneration, setPaginacao, generation, currentGeneration, setPokemonsAcumulados}) => {
  // function ola() {
  //   // console.log(generation[currentGeneration][1])
  //   // console.log(currentGeneration)
  //   setPaginacao(1)
  // }
  // ola()
  return(
<Navbar bg="" expand="lg">
<Container fluid>
<Navbar.Toggle aria-controls="navbarScroll" />

  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '150px' }}
      navbarScroll>
      <Nav.Link href="#gen1" onClick={() => (setCurrentGeneration("1") || setPaginacao(generation["1"][0]))}>Gen 1</Nav.Link>
      {/* <Nav.Link href="#action1" onClick={() => setSprit("front_default")}>Frente</Nav.Link> */}
      {/* <Nav.Link href="#action2" onClick={() => setSprit("back_default")}>Costas</Nav.Link>
      <Nav.Link href="#" onClick={() => setSprit("front_shiny")}>Shiny
      </Nav.Link> */}
      <Nav.Link href="#gen2" onClick={() => setCurrentGeneration("2") || setPaginacao(generation["2"][0])}>Gen 2</Nav.Link>
      <Nav.Link href="#gen3" onClick={() => setCurrentGeneration("3") || setPaginacao(generation["3"][0])}>Gen 3
      </Nav.Link>
      <Nav.Link href="#gen4" onClick={() => setCurrentGeneration("4") || setPaginacao(generation["4"][0])}>Gen 4
      </Nav.Link>
      <Nav.Link href="#gen5" onClick={() => setCurrentGeneration("5") || setPaginacao(generation["5"][0])}>Gen 5
      </Nav.Link>
      <Nav.Link href="#gen6" onClick={() => setCurrentGeneration("6") || setPaginacao(generation["6"][0])}>Gen 6
      </Nav.Link>
      {/* <Nav.Link href="#all" onClick={() => setCurrentGeneration("all")}>ALL
      </Nav.Link> */}
    </Nav>
    {/* <Navbar.Brand href="#">Pokemon</Navbar.Brand> */}

  </Navbar.Collapse>
  <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onInput={() =>setBuscadorPkm(document.querySelector(".me-2").value.toLowerCase())}
      />
      {/* <Button variant="outline-success">Procurar</Button> */}
    </Form>
</Container>
</Navbar>
  )
}

export default NavBar