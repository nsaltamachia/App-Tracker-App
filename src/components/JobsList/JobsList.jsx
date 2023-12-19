import "./JobsList.css";
import { Link } from "react-router-dom";
import * as jobsService from "../../utilities/jobs-service";

export default function JobsList({jobs, setJobs}) {
  async function handleDelete(id) {
    await jobsService.deleteJob(id);
   
    
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
                className="delete-button" onClick={() => handleDelete(job._id)}>Delete Entry
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

