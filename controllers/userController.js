const data = require('../data/db.json');
const fs = require('fs');

class userController {
  static async getAllUsers(req, res) {
    try {
      const dataUsers = await JSON.parse(fs.readFileSync(data, 'utf-8'));

      res.status(200).json(dataUsers.users).me;
    } catch (error) {}
  }
}

module.exports = userController;
