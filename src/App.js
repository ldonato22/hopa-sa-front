import './App.css';
import BackToTopButton from './components/BackToTopButton';
import { Container, Navbar, Nav, Row, Col, Button, ButtonGroup, Card, CardGroup, ListGroup, Carousel, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookSquare, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { FiMapPin, FiMap } from 'react-icons/fi';
import logo from "./logo.png";

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/"><img src={logo} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Item><Nav.Link href="/"><h5>Inicio</h5></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#servicios"><h5>Servicios</h5></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#productos"><h5>Productos</h5></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#contactos"><h5>Contactos</h5></Nav.Link></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
            <Carousel interval={5000}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/carucel01.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1>Servicios</h1>
                  <p>Somos especialistas en Logística Nacional e Internacional, nos distingue el Servicio sin cargo…</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/carucel02.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h1>Productos</h1>
                  <p>HOPA te ofrece una amplia gama de productos para que elijas la opción que prefieras y encuentres loque estás buscando...</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/carucel03.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>El mejor servicio siempre</h1>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

      </header>
      <main>

        <Container>
            <br/><br/>

            <Card border="light" className="bg-success text-center text-white">
              <Card.Body>
                <Card.Title><h2>El mundo a tu alcance…</h2></Card.Title>
                <Card.Text>
                Somos un grupo de innovadores expertos en Logística y Comercio Nacional e Internacional quienes nos comprometemos a brindar la mejor atención a todos nuestros clientes cubriendo sus necesidades y creando un vínculo empresarial con una marcada diferencia en servicios integrales para asegurar una experiencia positiva y productiva.
                </Card.Text>
                <Card.Text><h4>Nuestra meta, tu satisfacción</h4></Card.Text>
              </Card.Body>
            </Card>

            <br/><br/>

            <Row xs={1} md={2} className="p-4 bg-secondary">
                <Col xs={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center">Servicios</Card.Title>
                      <Card.Text>Hopa Logística. Somos especialistas en Logística Nacional e Internacional, nos distingue el Servicio sin cargo…</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center">Productos</Card.Title>
                      <Card.Text>HOPA te ofrece una amplia gama de productos para que elijas la opción que prefieras y encuentres loque estás buscando...</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
            <Row xs={1} md={2} className="p-4 bg-secondary">
                <Col xs={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center">Tarjeta Cliente Fiel</Card.Title>
                      <Card.Text>Accedé a tu Tarjeta Cliente Fiel y en tu 3ra(tercera) compra obtené magníficos descuentos y beneficios.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center">Asociate a HOPA</Card.Title>
                      <Card.Text>Hopa te ofrece trabajar juntos como Asociados!Porque queremos que también formes parte denosotros.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>


          <br/><br/><hr/><br/><br/>
          <h1 id='servicios' className='text-center'>Servicios</h1>
          <br/><br/>

          <Row className='pt-3'>
            <Col xs={6}>
              <Card border="dark" className='bg-light'>
                <Card.Body>
                  <Card.Title>HoPa Logística</Card.Title>
                  <Card.Text>Somos especialistas en Logística Nacional e Internacional, nos distingue el Servicio sin cargo y Personalizado de Compra que brindamos a todos nuestros clientes. ¡Te ayudamos con tu compra sin costo alguno!</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6}>
              <Card border="dark" className='bg-light'>
                <Card.Body>
                  <Card.Title>Flete</Card.Title>
                  <Card.Text>Transporte Marítimo y Fluvial para todo tipo de cargas desde un peso mínimo de 2 kg a un peso máximo de 300.000 toneladas.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='pt-3'>
            <Col xs={6}>
              <Card border="dark" className='bg-light'>
                <Card.Body>
                  <Card.Title>LCL/LCL - Consolidación</Card.Title>
                  <Card.Text>Ofrecemos servicio de consolidación para todas las cargas. Nos encargamos cuidadosamente, para trayectos cortos como largos, de la planificación y carga de los contenedores aportando agilidad y garantizando espacio y salidas regulares y frecuentes a una gran variedad de destinos desde los principales puertos del mundo.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6}>
            <Card border="dark" className='bg-light'>
                <Card.Body>
                  <Card.Title>FCL/FCL - Full Container</Card.Title>
                  <Card.Text>Ofrecemos servicio de Contenedor Completo, tanto Puerta a Puerta como Puerta a Puerto y Puerto a Puerto. Nos adaptamos a las necesidades y comodidades de nuestros clientes con los equipamientos más especiales:<br />
                    <br />
                    {' '}RoRo...<br />
                    Containers 20 pies & 40 pies<br />
                    Open Top Containers<br />
                    Reefer 20 pies & 40 pies<br />
                    Flat Rack.{' '}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <br/><br/>

          <Row>
            <CardGroup className='pt-5'>
              <Card>
                <Card.Img variant="top" src="images/servicio01.png" />
                <Card.Header><h5>Cargas de Proyectos Industriales</h5></Card.Header>
                <Card.Body>
                  <Card.Text>Proporcionamos servicios y soluciones para Proyectos Industriales, gestionamos la búsqueda del producto en las instalaciones del Cliente y garantizamos un embalaje seguro según las especificaciones de transporte.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="images/servicio02.png" />
                <Card.Header><h5>Seguros</h5></Card.Header>
                <Card.Body>
                  <Card.Text>Ofrecemos Seguro de cobertura para la carga transportada desde la puerta del vendedor hasta el destino convenido, informando cada movimiento durante su traslado.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="images/servicio03.png" />
                <Card.Header><h5>Despacho y Protocolización</h5></Card.Header>
                <Card.Body>
                  <Card.Text>Ofrecemos servicios de Despacho, Trámites Aduaneros en Puertos de Paraguay y Escrituras Públicas con Escribanos matriculados en el lugar donde disponga y convenga al cliente.</Card.Text>
                </Card.Body>
              </Card>
          </CardGroup>
        </Row>

          <br/><br/><hr/><br/><br/>
          <h1 id='productos' className='text-center'>Productos</h1>
          <br/><br/>

          <Card className="bg-success text-center text-white">
            <Card.Body>
            <Card.Text>HOPA te ofrece una amplia gama de productos para elijas la opción que prefieras y encuentres lo que estás buscando. Importamos y exportamos todo tipo de vehículos usados con el Servicio sin cargo y Personalizado de Compra que otorgamos a todos nuestros clientes.</Card.Text>

              <Card.Text>¡Te ayudamos con tu compra sin costo alguno!</Card.Text>
            </Card.Body>
          </Card>

          <Row>
            <Col className='pt-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="images/producto01.png" />
                <Card.Body>
                  <Card.Title>HoPa Camiones</Card.Title>
                  <Card.Text>
                    Ofrecemos los mejores camiones usados del mercado.
                  </Card.Text>
                  <Button href="http://www.hopa-camiones.com" variant="primary">Aqui!</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='pt-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="images/producto02.png" />
                <Card.Body>
                  <Card.Title>HoPa Maquinarias</Card.Title>
                  <Card.Text>
                    Ofrecemos las mejores maquinarias del mercado.
                  </Card.Text>
                  <Button href="https://www.hopa-camiones.com/c-4740414/hopa-maquinarias/" variant="primary">Aqui!</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='pt-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="images/producto03.png" />
                <Card.Body>
                  <Card.Title>HoPa Playa</Card.Title>
                  <Card.Text>
                    Ofrecemos las mejores playa del mercado.
                  </Card.Text>
                  <Button href="https://www.hopa-camiones.com/c-4633820/hopa-playa/" variant="primary">Aqui!</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='pt-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="images/producto04.png" />
                <Card.Body>
                  <Card.Title>HoPa Repuestos</Card.Title>
                  <Card.Text>
                    Ofrecemos los mejores repuestos del mercado.
                  </Card.Text>
                  <Button href="/" variant="primary">Aqui!</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <br/><br/><hr/><br/><br/>
          <h1 id='contactos' className='text-center'>Contactos</h1>
          <br/><br/>

          <Row className='align-items-center'>
            <Col className='pt-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Header className='bg-success text-center text-white'><h5>SEDE PAISES BAJOS <Image src="images/pais01.png" /></h5></Card.Header>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item><FiMapPin/> Beeldsweg 6-J Zuidland</ListGroup.Item>
                  <ListGroup.Item><FaWhatsapp/> 987665800</ListGroup.Item>
                  <ListGroup.Item><GoMail/> info@hopatrading.com</ListGroup.Item>
                  <ListGroup.Item><FiMap/> Zuidland, Países Bajos</ListGroup.Item>
                </ListGroup>
                <Card.Img variant="bottom" src="images/mapa02.png" />
              </Card>
            </Col>
            <Col className='pt-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Header className='bg-success text-center text-white'><h5>SEDE PARAGUAY <Image src="images/pais02.png" /></h5></Card.Header>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item><FiMapPin/> Mariscal José Félix Estigarribia, km 19.5 Ruta2 Capiata</ListGroup.Item>
                  <ListGroup.Item><FaWhatsapp/> 987665800</ListGroup.Item>
                  <ListGroup.Item><GoMail/> info@hopatrading.com</ListGroup.Item>
                  <ListGroup.Item><FiMap/> Asuncion, Paraguay</ListGroup.Item>
                </ListGroup>
                <Card.Img variant="bottom" src="images/mapa01.png" />
              </Card>
            </Col>
            <Col className="my-1 pt-5" sm={3}>
                <ButtonGroup vertical>
                  <Button href="https://facebook.com/HoPatrading" target="_blank" size="lg" className='btn btn-primary mb-4'><FaFacebookSquare/></Button>
                  <Button href="https://facebook.com/HolandaParaguay" target="_blank" size="lg" className='btn btn-primary mb-4'><FaFacebookSquare/></Button>
                  <Button href="/" size="lg" className='btn btn-primary mb-4'><FaYoutube/></Button>
                  <Button href="/" size="lg" className='btn btn-primary mb-4'><FaInstagram/></Button>
                </ButtonGroup>
            </Col>
          </Row>

          <br/><br/>
        </Container>
      </main>
      <footer className='py-5 bg-dark'>
        <Container className='px-4'>
          <p className='text-center text-white'>Copyright &copy; HOPA S.A. 2022</p>
        </Container>
      </footer>

      <BackToTopButton />
    </div>
  );
}

export default App;
