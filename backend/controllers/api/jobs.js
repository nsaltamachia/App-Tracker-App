const Job = require("../../models/job");

const jwt = require("jsonwebtoken");


module.exports = {
  index,
  create,
  createJWT,
  delete: deleteJob,
  edit,
  update,
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

async function edit(req, res) {
  const job = await Job.findById(req.params.id);
  res.render("jobs/edit", { job });
}

async function update(req, res) {
  try {
    console.log(req.body);
    const updatedJob = await Job.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    console.log(updatedJob);
    res.status(200).json(updatedJob);
  } catch (error) {
    console.log(error);
  }
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
