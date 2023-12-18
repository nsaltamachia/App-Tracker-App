import "./JobsList.css";

export default function JobsList(props) {
  return (
    <>
      <ul>
        {props.jobs.map((job, index) => (
          <li>
            {job.jobTitle}
            &nbsp;|&nbsp;
            {job.companyName}
            &nbsp;|&nbsp;
            {job.status}
            <button>Edit Entry</button>
            <button>Delete Entry</button>
          </li>
        ))}
      </ul>
    </>
  );
}

