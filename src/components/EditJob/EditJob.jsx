import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditJob.css";
import * as jobsService from "../../utilities/jobs-service";

export default function UpdateJobForm({ jobs, setJobs }) {
  const [job, setJob] = useState({
    jobTitle: "",
        companyName: "",
        status: "",
        description: "",
        submissionDate: "",
        salary: "",
        followUpDate: "",
  });

  const [error, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const job = jobs.find((job) => job._id == id);
    console.log(job);
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
      <form className="edit-job-form" onSubmit={handleSubmit}>
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
          value={job.description}
          onChange={handleChange}
          placeholder="Type a short description"
        />
        <input
          type="date"
          name="status"
          value={job.submissionDate }
          onChange={handleChange}
          placeholder="Submission Date"
        />
        <input
          type="text"
          name="status"
          value={job.salary}
          onChange={handleChange}
          placeholder="Salary/Range"
        />
        <input
          type="date"
          name="status"
          value={job.followUpDate}
          onChange={handleChange}
          placeholder="Follow Up Date"
        />
        <select
          name="status"
          value={job.status}
          onChange={handleChange}
          placeholder="Application Status"
        >
          <option value="">Select status</option>
          <option value="Applied">Applied</option>
          <option value="Pending Follow-up">Pending Follow-up</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button >Submit Edit</button>
      </form>
        <button onClick={() => navigate("/")}>Back to List</button>
    </>
  );
}
