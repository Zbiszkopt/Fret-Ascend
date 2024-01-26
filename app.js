const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./api/routes/users")
const chordRoutes = require("./api/routes/chords")
const cors = require("cors");
//CORS
app.use(cors());

//zmienne środowiskowe
require('dotenv').config()

//połączenie z bazą
mongoose.connect(`mongodb+srv://szczechzbyszek:lxGfJ5vgsBPnYy4e@cluster0.ngqorpg.mongodb.net/fretascend?retryWrites=true&w=majority`)

//logger
app.use(morgan("combined")); //uruchomienie

//parsowanie body
app.use(bodyParser.json());

//routy
app.use("/users",  userRoutes);
app.use("/chords",  chordRoutes);


module.exports = app; // Eksportowanie aplikacji Express

