import { useState } from "react";
import * as jobsService from "../../utilities/jobs-service";
import "./NewJobForm.css";


export default function NewJobForm(props) {
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
        try {
            props.setJobs([...props.jobs, newJob])
            
        } catch {
            setError("Job Creation Failed - Try Again");
        }
    }

    return (
        <div ClassName="form-container">
            <form onSubmit={handleSubmit}>
                <input type="text" name="jobTitle" value={newJob.jobTitle} onChange={handleChange} placeholder="Job Title" />
                <input type="text" name="companyName" value={newJob.companyName} onChange={handleChange} placeholder="Company Name" />
                <input type="text" name="status" value={newJob.status} onChange={handleChange} placeholder="Application Status" />
                <button>ADD JOB</button>
            </form>
        
      </div>
    );
}