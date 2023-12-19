import { useState, useEffect } from "react";
import "./NewJobForm.css";
import * as jobsService from "../../utilities/jobs-service";

export default function NewJobForm({ jobs, setJobs }) {
  const [newJob, setNewJob] = useState({
    jobTitle: "",
    companyName: "",
    status: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    setNewJob({ ...newJob, [event.target.name]: event.target.value });
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // setJobs([...jobs, newJob])
    const createdJob = await jobsService.create(newJob);
    console.log(createdJob);
    // try {
    //     const response = await fetch("/api/jobs", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${getToken()}`},
    //         credentials: "include",
    //         body: JSON.stringify(newJob),
    //     });
    //     console.log(jobs)
    //     // console.log(response)
    //     if (response.ok) {
    //         const newJob = await response.json();
    //         setJobs([...jobs, newJob])
    //         console.log("job added successfully")

    //     } else {
    //         console.log("Job Creation Failed - Try Again");
    //     }
    // } catch {
    //     setError("Job Creation Failed - Try Again");
    // }
  }




  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="jobTitle"
        value={newJob.jobTitle}
        onChange={handleChange}
        placeholder="Job Title"
      />
      <input
        type="text"
        name="companyName"
        value={newJob.companyName}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <input
        type="text"
        name="status"
        value={newJob.status}
        onChange={handleChange}
        placeholder="Application Status"
      />
      <button>ADD JOB</button>
    </form>
  );
}
