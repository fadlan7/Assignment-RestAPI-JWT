const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const controllers = require('./controllers');
const authentication = require('./middleware/authentication');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', controllers.userController.userLogin);
app.use(authentication);
app.get('/teams', controllers.teamController.getAllTeams);
app.get('/teams/:id', controllers.teamController.getTeamById);

app.listen(PORT, () => {
  console.log(`Running on port: http://localhost:${PORT}`);
});
