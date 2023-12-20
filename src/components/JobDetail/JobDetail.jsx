import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";


export default function JobDetail({ jobs}) {
const [job, setJob] = useState({});

const { id } = useParams();
useEffect(() => {
  const job = jobs.find((job) => job._id == id);

  if (job) setJob(job);
}, [id]);

    return (
        <>
        <h1>Job Detail</h1>
        <p>{job.jobTitle}</p>
      </>
    );

}