import "./JobsList.css";
import { Link } from "react-router-dom";
import * as jobsService from "../../utilities/jobs-service";

export default function JobsList({ jobs, setJobs }) {
  async function handleDelete(id) {
    try {
      // deletes the job from the database
      await jobsService.deleteJob(id);
      // removes the job from state & updates the ui
      const updatedJobs = jobs.filter((job) => job._id !== id);
      setJobs(updatedJobs);
    } catch (error) {
      console.log("error deleting job", error);
    }
  }

  return (
    <>
      
        <ul >
          {jobs.map((job, index) => (
            <li key={index}>
              {job.jobTitle}
              &nbsp;|&nbsp;
              {job.companyName}
              &nbsp;|&nbsp;
              {job.status}
              <div>
                {/* edit link is going to edit/undefined */}
                <Link to={`/edit/${job._id}`} className="edit-button">
                  Edit Entry
                </Link>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete Entry
                </button>
              </div>
            </li>
          ))}
        </ul>
      
    </>
  );
}
