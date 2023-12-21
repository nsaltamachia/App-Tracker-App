import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./JobDetail.css";

export default function JobDetail({ jobs }) {
  const navigate = useNavigate();
  const [job, setJob] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const job = jobs.find((job) => job._id == id);

    if (job) setJob(job);
  }, [id]);

  return (
    <>
      <h1>Job Detail</h1>
      <div className="job-details">
        <p>Job Title: {job.jobTitle}</p>
        <p>Company: {job.companyName}</p>
        <p>Other Notes: {job.jobDescription}</p>
        <p>Date Submitted: {new Date(job.submissionDate).toLocaleDateString("en-US")}</p>
        <p>Salary/Range: {job.salary}</p>
        <p>Follow-up Date: {new Date(job.followUpDate).toLocaleDateString("en-US")}</p>
        <p>Application Status: {job.status}</p>
      </div>

      <Link id="details-edit-button" to={`/edit/${job._id}`} className="edit-button">
        Edit Entry
      </Link>
      <button id="details-back-button" onClick={() => navigate("/")}>Back to List</button>
    </>
  );
}
