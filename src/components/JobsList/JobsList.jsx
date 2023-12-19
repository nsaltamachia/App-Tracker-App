import "./JobsList.css";
import { Link } from "react-router-dom";

export default function JobsList({jobs, setJobs}) {
  function handleDelete(id) {
    setJobs(jobs.filter((job) => job.id !== id));
    
  }
  return (
    <>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job.jobTitle}
            &nbsp;|&nbsp;
            {job.companyName}
            &nbsp;|&nbsp;
            {job.status}
            <div>
              <Link to={`/edit/${job.id}`} className="edit-button">Edit Entry</Link>
              <button
                className="delete-button" onClick={() => handleDelete(job.id)}>Delete Entry
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

