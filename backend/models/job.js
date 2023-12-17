const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const jobSchema = new mongoose.Schema(
  {
    jobTitle: { 
            type: String,
            required: true
        },
    companyName: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    jobDescription: { //how do I indicate that this is a text area?
      type: String,
      trim: true,
        },
    submissionDate: {
        type: Date,
        default: Date.now
        },
    city: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        },
    state: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        },
    remote: {
        type: Boolean,
        default: false,
        },
    salary: {
        type: Number,
        required: true,
        },
    skills: {
        type: [String],
        default: [],
        },
    coverLetter: {
        type: String,
        trim: true,
        },
    resume: {
        type: String,
        trim: true,
        required: true,
        },
    otherNotes: {
        type: String,
        trim: true,
        },
    contacts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contact",
        default: [],
        },
    followUpDate: {
        type: Date,
        default: () => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 7);
            return currentDate;
            }
        },

    status: {
        type: String,
        enum: ['Not Yet Submitted', 'Submitted', 'Pending Follow-up', 'Awaiting Response', 'Interview Scheduled', 'Awaiting Post-Interview Response', 'Rejected'],
        default: 'Not Yet Submitted',
    },
    whereFiled: {
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