import { useState, useEffect } from "react";
import "./NewJobForm.css";
import { getToken } from "../../utilities/users-service";
import sendRequest from "../../utilities/send-request";


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
            const response = await fetch("/api/jobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                    "Authorization": `Bearer ${getToken()}`},
                credentials: "include",
                body: JSON.stringify(newJob),
            });
            console.log(newJob)
            console.log(response)
            if (response.ok) {
                console.log("data added successfully")
                // const data = await response.json();
                // props.setJobs([...props.jobs, data]);
            } else {
                console.log("Job Creation Failed - Try Again");
            }
        } catch {
            setError("Job Creation Failed - Try Again");
        }
    }

    return (
        
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="jobTitle"
                    value={newJob.jobTitle}
                    onChange={handleChange}
                    placeholder="Job Title" />
                <input
                    type="text"
                    name="companyName"
                    value={newJob.companyName}
                    onChange={handleChange}
                    placeholder="Company Name" />
                <input
                    type="text"
                    name="status"
                    value={newJob.status}
                    onChange={handleChange}
                    placeholder="Application Status" />
                <button >ADD JOB</button>
            </form>
        
     
    );
}