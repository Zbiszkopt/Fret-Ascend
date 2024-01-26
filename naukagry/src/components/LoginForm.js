import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        const userData = { /* dostarcz dane użytkownika */ };
        login(userData);
        navigate('/home');
      } else {
        toast.error('Błąd logowania: Nieprawidłowy email lub hasło.');
      }

    } catch (error) {
      console.error('Błąd logowania:', error);
    }
  };

  return (
    <div className="bg-image text-white">
      <center>
        <br></br>
        <h2>Logowanie</h2>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Email:</label>
            <div className="col-sm-30">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Wpisz adres email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="pwd">Hasło:</label>
            <div className="col-sm-50">
              <input
                type="password"
                className="form-control"
                placeholder="Wpisz hasło"
                name="pwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-info">Zaloguj</button>
            </div>
            Nie masz konta? Zarejestruj się!<br></br>
                  <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <Link to="/users/register" className="btn btn-info">
                          Zarejestruj się
                        </Link>
                      </div>
                  </div>
          </div>
        </form>
      </center>
    </div>
  );
};

export default LoginForm;