const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Brak tokena, autoryzacja odmówiona' });
  }

  try {
    const decoded = jwt.verify(token, 'supersecretkey'); // Klucz tajny używany do podpisywania tokena

    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Nieprawidłowy token, autoryzacja odmówiona' });
  }
};

module.exports = verifyToken;