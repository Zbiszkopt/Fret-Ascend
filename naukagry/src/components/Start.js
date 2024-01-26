import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';



const Start = () => {
  return (
    <div className="container-fluid bg-image text-white ">
       <div className="row">
        <div className="col-12">
          <br></br>
        <h1><center>Witaj na portalu do nauki gry na gitarze Fret Ascend!</center></h1>
      <p><center>
        Ta strona to doskonałe miejsce dla osób, które dopiero rozpoczynają swoją przygodę z grą na gitarze.
        Znajdziesz tutaj mnóstwo przydatnych materiałów oraz możliwość nauki od doświadczonych profesjonalistów,
        którzy chętnie podzielą się swoją wiedzą i wskazówkami.
        </center></p>
      
        <center><h2>Czego możesz się spodziewać na naszej stronie?</h2></center>
      
      <ul>
        <li>Proste lekcje gry na gitarze: Dostęp do łatwo przyswajalnych lekcji, które krok po kroku wprowadzą Cię w świat gry na gitarze. Bez zbędnych skomplikowanych teorii!</li>
        <li>Wskazówki od profesjonalistów: Nasi instruktorzy, którzy sami są pasjonatami gitary, przygotowali dla Ciebie praktyczne porady, które pomogą Ci w opanowaniu podstawowych umiejętności.</li>
        <li>Materiały dla nowicjuszy: Nuty, tabulatury i prosty materiał edukacyjny, który pozwoli Ci zrozumieć podstawy grania na gitarze.</li>
        <li>Wsparcie społeczności: Możliwość wymiany doświadczeń z innymi początkującymi gitarzystami, dzielenie się postępami oraz motywowanie się nawzajem do dalszego rozwoju.</li>
        </ul>
      <br></br>
      <br></br>
      
<center>

<Link to="/users/login">
    <button className="btn btn-primary">Logowanie</button>
</Link><p> </p>
<Link to="/users/register">
    <button className="btn btn-primary">Rejestracja</button>
</Link>
<p>Dołącz do nas, aby rozpocząć swoją przygodę z grą na gitarze. Tutaj znajdziesz wszystko, czego potrzebujesz, aby stać się lepszym gitarzystą!</p>
    <p>Musisz być zalogowany, aby przeglądać zawartość :) </p>
</center>
</div>
</div>
</div>

  );
};

export default Start;