// Navbar.js
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useAuth } from '../AuthContext'; // Dodaj import

const Navigation = () => {
  const { user, logout } = useAuth(); // Zamiast przekazywać propsy, używamy useAuth()

  return (
    <Navbar bg="dark" variant="dark" className='sticky-top'>
      <React.Fragment> ... </React.Fragment>
      <Navbar.Brand href="/home">
        <img
          alt=" "
          src="Logo.png"
          width="130"
          height="50"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/articles">Artykuły</Nav.Link>
        <Nav.Link href="/chords">Akordy i Tabulatury</Nav.Link>
        <Nav.Link href="/lessons">Lekcje Wideo</Nav.Link>
        
        <Nav.Link href="/premium">Premium</Nav.Link>
      </Nav>
      <Nav className="ms-auto">
        {user ? (
          <>
            <Nav.Link href="/profile"><span className="bi bi-person"></span> Profil</Nav.Link>
            <Nav.Link onClick={logout}><span className="bi bi-box-arrow-right"></span> Wyloguj</Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href="/users/login"><span className="bi bi-box-arrow-in-right"></span> Zaloguj</Nav.Link>
            <Nav.Link href="/users/register"><span className="bi bi-person-plus"></span> Zarejestruj</Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;