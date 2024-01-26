import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

const Premium = () => {
  const [premiumOptions, setPremiumOptions] = useState([]);

  useEffect(() => {

  }, []);

  const handlePurchase = (optionId) => {
    console.log(`Zakupiono opcję premium o id: ${optionId}`);
  };

  return (
    <div className="b-ground-a d-flex justify-content-center">
      <div>
        <h2>Opcje Premium</h2>
        {premiumOptions.length === 0 ? (
          <p>Brak dostępnych opcji Premium.</p>
        ) : (
          <ul>
            {premiumOptions.map((option) => (
              <li key={option.id}>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <p>Cena: {option.price} zł</p>
                <button onClick={() => handlePurchase(option.id)}>Kup teraz</button>

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Premium;