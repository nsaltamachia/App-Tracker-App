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
      <div className="job-card-container">
        
          {jobs.map((job, index) => (
            <div className="card-data" key={index}>
              <p>Job Title: {job.jobTitle}</p>
              <p>Company: {job.companyName}</p>
              <p>Subit Date: {new Date(job.submissionDate).toLocaleDateString("en-US")}</p>
              <p>Follow-up Date: {new Date(job.followUpDate).toLocaleDateString("en-US")}</p>
              <p>Application Status: {job.status}</p>
              <br />
              <div className="button-container">
                <Link to={`/edit/${job._id}`} className="edit-button">
                  Edit Entry
                </Link>
                <Link
                  className="delete-button"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete Entry
                </Link>
                <Link className="details-button" to={`/show/${job._id}`} >
                  More Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      
    </>
  );
}
