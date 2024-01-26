import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

const ChordsForm = ({ onChordAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    soundUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/chords', formData);
      const newChord = response.data;
      onChordAdded(newChord);
      setFormData({ name: '', imageUrl: '', soundUrl: '' }); // Wyczyszczenie formularza po dodaniu
    } catch (error) {
      console.error('Błąd dodawania akordu:', error);
    }
  };

  return (
    <Container className="text-center">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nazwa akordu</Form.Label>
              <Form.Control
                type="text"
                placeholder="Wpisz nazwę akordu"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="imageUrl">
              <Form.Label>URL Obrazka</Form.Label>
              <Form.Control
                type="text"
                placeholder="Wklej URL obrazka"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="soundUrl">
              <Form.Label>URL Dźwięku</Form.Label>
              <Form.Control
                type="text"
                placeholder="Wklej URL dźwięku"
                name="soundUrl"
                value={formData.soundUrl}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" className="btn btn-info">Dodaj akord</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChordsForm;