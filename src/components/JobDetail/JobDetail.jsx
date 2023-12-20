import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function JobDetail({ jobs }) {
  const [job, setJob] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const job = jobs.find((job) => job._id == id);

    if (job) setJob(job);
  }, [id]);
  const navigate = useNavigate();
  return (
    <>
      <h1>Job Detail</h1>
      <p>{job.jobTitle}</p>
      <Link to={`/edit/${job._id}`} className="edit-button">
        Edit Entry
      </Link>
      <button onclick={() => navigate("/")}>BACK TO LIST</button>
    </>
  );
}
