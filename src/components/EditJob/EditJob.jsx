import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as jobsService from "../../utilities/jobs-service";

export default function UpdateJobForm({ jobs, setJobs }) {
  const [job, setJob] = useState({
    jobTitle: "",
    companyName: "",
    status: "",
  });

  const [error, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const job = jobs.find((job) => job._id == id);

    if (job) setJob(job);
  }, [id]);

  function handleChange(event) {
    setJob({ ...job, [event.target.name]: event.target.value });
    setError("");
  }

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const updatedJob = await jobsService.updateJob(id, job);
    console.log(updatedJob);
    setJob(updatedJob);

    // Update the jobs state
    const updatedJobs = jobs.map((job) => (job._id === id ? updatedJob : job));
    setJobs(updatedJobs);

    //redirect to home page
    navigate("/");
  }

  return (
    <>
      <h1>
        Edit "{job.jobTitle}" at {job.companyName}
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
