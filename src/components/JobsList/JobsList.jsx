import "./JobsList.css";
import { Link } from "react-router-dom";

export default function JobsList(props) {
  return (
    <>
      <ul>
        {props.jobs.map((job, index) => (
          <li key={index}>
            {job.jobTitle}
            &nbsp;|&nbsp;
            {job.companyName}
            &nbsp;|&nbsp;
            {job.status}
            <Link className="edit-button">Edit Entry</Link>
            <Link className="delete-button">Delete Entry</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

