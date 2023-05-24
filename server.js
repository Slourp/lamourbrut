const express = require('express');
const routes = require('./routes'); // Chemin vers ton fichier de routes

const app = express();

// ... Autres configurations et middleware

app.use('/api', routes); // Montage des routes à /api

app.listen(5173, () => {
  console.log("Serveur en cours d'exécution sur le port 5173");
});
