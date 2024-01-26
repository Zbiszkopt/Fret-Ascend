// RegistrationForm.js - Komponent formularza rejestracji
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    // Wykonaj żądanie HTTP do endpointu rejestracji na serwerze
    try {
      const response = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data); // Obsłuż odpowiedź serwera

      if (response.status === 201) {
        // Przekieruj na stronę Home
        navigate('/Home');
        localStorage.setItem('isRegisteredIn', 'true');
      }
  

    } catch (error) {
      console.error('Błąd rejestracji:', error);
    }
  };

  return (
    <div className="bg-image text-white">
    <center>
      <br></br>
      <h2>Rejestracja</h2>
    <form class="form-horizontal" onSubmit={handleRegistration}>
      <div class="form-group">
      <label class="control-label col-sm-2" for="email">Email:</label>
      <div class="col-sm-30">
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="Wpisz adres email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      </div>
      <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Hasło:</label>
      <div class="col-sm-50">
      <input
        type="password"
        class="form-control"
        placeholder="Wpisz hasło"
        name="pwd"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       </div>
       </div>
       <div class="form-group">
       <div class="col-sm-offset-2 col-sm-10">
       <button type="submit" class="btn btn-info">Zarejestruj</button>
       </div>
       </div>
    </form>
    </center>
    </div>
  );
};

export default RegistrationForm;