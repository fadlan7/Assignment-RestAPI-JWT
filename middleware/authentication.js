const data = require('../data/db.json');
const fs = require('fs');
const { verifyToken } = require('../helper/jwt');
// const dataUsers = await JSON.parse(fs.readFileSync(data, 'utf-8'));

async function authentication(req, res, next) {
  try {
    const token = req.headers.token;
    const userDecode = verifyToken(token);
  } catch (error) {}
}
