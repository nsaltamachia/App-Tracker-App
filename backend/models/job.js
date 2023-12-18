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
    status: {
      type: String,
      enum: [
        "Not Yet Submitted",
        "Submitted",
        "Pending Follow-up",
        "Awaiting Response",
        "Interview Scheduled",
        "Awaiting Post-Interview Response",
        "Rejected",
      ],
      default: "Not Yet Submitted",
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
