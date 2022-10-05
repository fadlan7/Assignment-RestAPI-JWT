const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const controllers = require('./controllers');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/teams', controllers.teamController.getAllTeams);
app.get('/teams/:id', controllers.teamController.getTeamById);

app.listen(PORT, () => {
  console.log(`Running on port: http://localhost:${PORT}`);
});
