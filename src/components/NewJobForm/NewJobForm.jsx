import { useState, useEffect } from "react";
import "./NewJobForm.css";
import * as jobsService from "../../utilities/jobs-service";

export default function NewJobForm({ jobs, setJobs }) {
  const [newJob, setNewJob] = useState({
    jobTitle: "",
    companyName: "",
    status: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    setNewJob({ ...newJob, [event.target.name]: event.target.value });
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setJobs([...jobs, newJob]);
    const createdJob = await jobsService.create(newJob);

    console.log(createdJob);

    // Add the newly created job to the jobs state
    setJobs((prevJobs) => [...prevJobs, createdJob]);

    // Clear the New Job form on submission
    setNewJob({
      jobTitle: "",
      companyName: "",
      status: "",
    });
  }

  return (
    <form className="new-job-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="jobTitle"
        value={newJob.jobTitle}
        onChange={handleChange}
        placeholder="Job Title"
      />
      <input
        type="text"
        name="companyName"
        value={newJob.companyName}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <textarea
        type="text"
        name="description"
        value={newJob.description}
        onChange={handleChange}
        placeholder="Type a short description"
      />

      <input
        type="date"
        name="submissionDate"
        value={
          newJob.submissionDate
            ? new Date(newJob.submissionDate).toISOString().slice(0, 10)
            : ""
        }
        onChange={handleChange}
        placeholder="Date Submitted"
      />

      <input
        type="text"
        name="salary"
        value={newJob.salary}
        onChange={handleChange}
        placeholder="Salary/Range"
      />
      <input
        type="date"
        name="followUpDate"
        value={
          newJob.followUpdate
            ? new Date(newJob.followUpDate).toISOString().slice(0, 10)
            : ""
        }
        onChange={handleChange}
        placeholder="Follow-up Date"
      />

      <select
        name="status"
        value={newJob.status}
        onChange={handleChange}
        placeholder="Application Status"
      >
        <option value="">Select status</option>
        <option value="Applied">Applied</option>
        <option value="Pending Follow-up">Pending Follow-up</option>
        <option value="Interview Scheduled">Interview Scheduled</option>
        <option value="Rejected">Rejected</option>
      </select>

      <button id="add-job-button" type="submit">
        ADD JOB
      </button>
    </form>
  );
}
