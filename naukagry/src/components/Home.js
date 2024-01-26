import { Container, Row, Col, Nav, Card, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Toast } from 'react-bootstrap';

const Home = () => {
    const [showToast, setShowToast] = useState(false);
    const [showRegisterToast, setShowRegisterToast] = useState(false);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
          setShowToast(true);
          localStorage.removeItem('isLoggedIn');
        }
      }, []);

      useEffect(() => {
        const isRegisteredIn = localStorage.getItem('isRegisteredIn');
        if (isRegisteredIn === 'true') {
          setShowRegisterToast(true);
          localStorage.removeItem('isRegisteredIn');
        }
      }, []);

  return (
    <div className="b-ground-home">
     {/* Treść strony */}
      <Container fluid>
        <Row className="mt-3" >
          <Col md={3}>
            {/* Menu boczne */}
            <Card className="bg-light bg-opacity-25">
              <Card.Body>
                <Card.Title>Nasi Profesjonaliści</Card.Title>
                <Card.Text>
                  <Nav className="flex-column">
                    <Nav.Link href="#link1">Jan Wiśniewski</Nav.Link>
                    <Nav.Link href="#link2">Krzysztof Kowalski</Nav.Link>
                    <Nav.Link href="#link2">Natalia Wójcik</Nav.Link>
                    <Nav.Link href="#link3">Piotr Malinowski</Nav.Link>
                  </Nav>
                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>

          </Col>
          <Col md={9}>
            {/* Lista artykułów */}
            <Card bg="transparent">
              <Card.Body>
                <Card.Title>Artykuły</Card.Title>
                <Card.Text>
                  <Row>
                    {/* Każdy artykuł jako osobna karta */}
                    <Col md={4}>
                      <Card className='custom-card'>
                        <Card.Img variant="top" src="Logo.png" />
                        <Card.Body>
                          <Card.Title>Trochę teorii na start</Card.Title>
                          <Card.Text>
                            Co musisz wiedzieć, aby zacząć swoją przygodę z gitarą
                          </Card.Text>
                          <Button variant="primary">Czytaj więcej</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    
                    <Col md={4}>
                      <Card className='custom-card'>
                        <Card.Img variant="top" src="Logo.png" />
                        <Card.Body>
                          <Card.Title>Na początku będzie płacz</Card.Title>
                          <Card.Text>
                            Co zrobić, aby zminimalizować problemy z palcami
                          </Card.Text>
                          <Button variant="primary">Czytaj więcej</Button>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col md={4}>
                      <Card className='custom-card'>
                        <Card.Img variant="top" src="Logo.png" />
                        <Card.Body>
                          <Card.Title>Jaką gitarę wybrać?</Card.Title>
                          <Card.Text>
                            Jeżeli nie masz jeszcze kupionego instrumentu, musisz to przeczytać
                          </Card.Text>
                          <Button variant="primary">Czytaj więcej</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    {/* Możesz dodać więcej artykułów */}
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Toast show={showRegisterToast} onClose={() => setShowRegisterToast(false)} className="position-fixed bottom-0 end-0 m-3">
  <Toast.Header>
    <strong className="me-auto">Pomyślnie zarejestrowano!</strong>
  </Toast.Header>
  <Toast.Body>Twoje konto zostało utworzone.</Toast.Body>
</Toast>

      <Toast show={showToast} onClose={() => setShowToast(false)} className="position-fixed bottom-0 end-0 m-3">
  <Toast.Header>
    <strong className="me-auto">Pomyślnie zalogowano!</strong>
  </Toast.Header>
  <Toast.Body>Witaj! Jesteś zalogowany.</Toast.Body>
</Toast>


    </div>
  );
};

export default Home;