import { useState } from "react";

import * as jobsService from "../../utilities/jobs-service";

export default function UpdateJobForm({ setJobs, id }) {
  const [updatedJob, setUpdatedJob] = useState({
    jobTitle: "",
    companyName: "",
    status: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    setUpdatedJob({ ...updatedJob, [event.target.name]: event.target.value });
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const updatedJob = await jobsService.updateJob(id, updatedJob);
    console.log(updatedJob);
    setJobs(updatedJob);
  }

  return (
    <>
      <h1>Edit (job title) at (companyname)</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="jobTitle"
          value={updatedJob.jobTitle}
          onChange={handleChange}
          placeholder="Job Title"
        />
        <input
          type="text"
          name="companyName"
          value={updatedJob.companyName}
          onChange={handleChange}
          placeholder="Company Name"
        />
        <input
          type="text"
          name="status"
          value={updatedJob.status}
          onChange={handleChange}
          placeholder="Application Status"
        />
        <button>Submit Edit</button>
      </form>
    </>
  );
}
