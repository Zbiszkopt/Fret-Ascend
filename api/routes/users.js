const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Model użytkownika
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//rejestracja
router.post('/register', async (req, res, next) => {  
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email });
  
      if (user) {
        return res.status(400).json({ message: 'Użytkownik już istnieje' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({ email, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: 'Rejestracja zakończona sukcesem' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Błąd rejestracji' });
    }
  });
  

//logowanie
router.post("/login", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: 'Nieprawidłowe dane logowania' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: 'Nieprawidłowe dane logowania' });
      }
  
      // Tutaj możesz wygenerować token JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { expiresIn: '3h' });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Błąd logowania' });
    }
  });

  router.post('/logout', (req, res) => {
    // Tutaj możesz dodać dodatkową logikę wylogowywania, jeśli to konieczne
    res.status(200).json({ message: 'Wylogowano pomyślnie' });
  });

  module.exports = router