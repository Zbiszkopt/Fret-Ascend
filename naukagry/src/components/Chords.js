import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Styles.css';
import ChordsForm from './ChordsForm';

const Chords = () => {
  const [chords, setChords] = useState([]);

  const handleChordAdded = (newChord) => {
    setChords([...chords, newChord]);
  };

  const handleChordRemove = async (chordId) => {
    try {

      await axios.delete(`http://localhost:3000/chords/${chordId}`);


      const updatedChords = chords.filter((chord) => chord.id !== chordId);
      setChords(updatedChords);

      toast.success('Akord został usunięty.');
    } catch (error) {
      toast.error('Wystąpił błąd podczas usuwania akordu.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/chords');
        setChords(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chords-container b-ground">
      <h1>Akordy i Tabulatury</h1>
      <h3>
        Poniżej możesz przeglądać podstawowe akordy. Z biegiem nauki będziesz mógł samodzielnie dodawać nowe, bardziej
        zaawansowane akordy. Powodzenia!
      </h3>
      <ChordsForm onChordAdded={handleChordAdded} />

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6">
      {chords.map((chord) => (
  <div key={chord.id} className="col mb-4">
    <Card className="chord-card">
      <div>
        <Card.Img variant="top" src={chord.imageUrl} className='chord-card-img' />
        <Card.Body className="chord-card-body">
          <Card.Title className="custom-card-title">{chord.name}</Card.Title>
          <small>
            <audio controls className='chord-audio'>
              <source src={chord.soundUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </small>
        </Card.Body>
      </div>
    </Card>
  </div>
))}
      </div>
    </div>
  );
};

export default Chords;