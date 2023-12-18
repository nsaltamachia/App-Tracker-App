const Job = require('../../models/job');
const User = require('../../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
    create,
    createJWT,
}

async function create(req, res) {
    try {
        // Add the Job to the database
        console.log(req.body)
        const job = await Job.create(req.body);
        
        console.log(job)
        // const token = createJWT(job);
        // res.json(token);

    } catch (err) {
        return res.status(400).json(err);
    }
};




/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}
