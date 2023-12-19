import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as jobsService from "../../utilities/jobs-service";

export default function UpdateJobForm({ jobs, setJobs }) {
  const [job, setJob] = useState({
    jobTitle: "",
    companyName: "",
    status: "",
  });
  // let oldJobTitle = "";
  const [error, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const job = jobs.find((job) => job._id == id);
    // oldJobTitle = job.jobTitle;

    if (job) setJob(job);
  }, [id]);

  function handleChange(event) {
    setJob({ ...job, [event.target.name]: event.target.value });
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await jobsService.updateJob(id, job);
    console.log(result);
    setJob(result);
  }

  return (
    <>
      <h1>
        Edit {job.jobTitle} at {job.companyName}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="jobTitle"
          value={job.jobTitle}
          onChange={handleChange}
          placeholder="Job Title"
        />
        <input
          type="text"
          name="companyName"
          value={job.companyName}
          onChange={handleChange}
          placeholder="Company Name"
        />
        <input
          type="text"
          name="status"
          value={job.status}
          onChange={handleChange}
          placeholder="Application Status"
        />
        <button>Submit Edit</button>
      </form>
    </>
  );
}
