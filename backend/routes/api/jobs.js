const express = require("express");
const router = express.Router();
const jobsCtrl = require("../../controllers/api/jobs");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// GET 
// POST /api/jobs
router.post("/", jobsCtrl.create);

module.exports = router;
