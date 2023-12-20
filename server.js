const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

// Always require and configure near the top
require("dotenv").config();
require("./backend/config/database");

// AWS S3
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  // Configure AWS credentials and region if necessary
  // credentials: new AWS.Credentials(accessKeyId, secretAccessKey),
  // region: 'your-region',
});

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use(require("./backend/config/checkToken"));

const post = process.env.PORT || 3001;

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./backend/routes/api/users"));
app.use('/api/jobs', require('./backend/routes/api/jobs'));
// app.use("/api/contacts", require("./backend/routes/api/contacts"));
// app.use("/api/letters", require("./backend/routes/api/letters"));
// app.use("/api/resumes", require("./backend/routes/api/resumes"));
// app.use("api/skills", require("./backend/routes/api/skills"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});





