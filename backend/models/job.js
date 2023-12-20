const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    jobDescription: {
      type: String,
      
    },
    submissionDate: {
      type: Date,
      default: Date.now,
    },
    salary: {
      type: String,
    },
    followUpDate: {
      type: Date,
      default: () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 7);
        return currentDate.toLacalDateString("en-US");
      },
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
