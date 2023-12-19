const Job = require("../../models/job");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  index,
  create,
  createJWT,
  delete: deleteJob,
};

async function create(req, res) {
  try {
    // Add the Job to the database
    console.log(req.body);
    const job = await Job.create(req.body);

    console.log(job);
    // const token = createJWT(job);
    // res.json(token);
  } catch (err) {
    return res.status(400).json(err);
  }
}

async function deleteJob(req, res) {
  try {
    console.log(req.params.id);
    // Delete the Job from the database
    const deletedJob = await Job.findOneAndDelete({ _id: req.params.id });
    console.log(deletedJob);
    
    if (!deletedJob) {
      return res.status(404).json({ error: "Item not found" });
    }
    return res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.log(error);
  }
}

async function index(req, res) {
  const jobs = await Job.find({});
  res.json(jobs);
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
