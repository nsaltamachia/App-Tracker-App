const express = require("express");
const router = express.Router();
const jobsCtrl = require("../../controllers/api/jobs");
const ensureLoggedIn = require("../../config/ensureLoggedIn");
const Job = require('../../models/job');


router.get("/", jobsCtrl.index);
router.get("/:id", jobsCtrl.show);
router.post("/", ensureLoggedIn, jobsCtrl.create);
router.delete("/:id", jobsCtrl.delete);
router.put("/:id", jobsCtrl.update);






module.exports = router;