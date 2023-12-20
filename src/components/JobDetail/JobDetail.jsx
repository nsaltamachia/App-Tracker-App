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
        <p>{job.jobTitle}</p>
        <p>{job.companyName}</p>
        <p>{job.jobDescription}</p>
        <p>{new Date(job.submissionDate).toLocaleDateString("en-US")}</p>
        <p>{job.salary}</p>
        <p>{new Date(job.followUpDate).toLocaleDateString("en-US")}</p>
        <p>{job.status}</p>
      </div>

      <Link to={`/edit/${job._id}`} className="edit-button">
        Edit Entry
      </Link>
      <button onClick={() => navigate("/")}>BACK TO LIST</button>
    </>
  );
}
