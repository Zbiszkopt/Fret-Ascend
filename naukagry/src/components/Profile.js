import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {

  }, []);

  return (
    <div className="b-ground-a d-flex justify-content-center">
      <div>
      <h2>Twój profil</h2>
      {userData ? (
        <div>
          <p>Imię: {userData.firstName}</p>
          <p>Nazwisko: {userData.lastName}</p>
          <p>Email: {userData.email}</p>

        </div>
      ) : (
        <p>Ładowanie danych...</p>
      )}
    </div>
    </div>
  );
};

export default Profile;