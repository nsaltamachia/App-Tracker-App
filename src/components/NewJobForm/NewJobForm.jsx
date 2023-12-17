import { useState } from "react";
import * as jobsService from "../../utilities/jobs-service";



export default function NewJobForm() {
    const [newJob, setNewJob] = useState({
        jobTitle: "",
        companyName: "",
        jobDescription: "",
        submissionDate: "",
        city: "",
        state: "",
        remote: "",
        salary: "",
        skills: [""],
        coverLetter: Buffer,
        resume: Buffer,
        otherNotes: "",
        contacts: [""],
        followUpDate: "",
        status: "",
        whereFiled: "",
    });
    const [error, setError] = useState("");

    function handleChange(event) {
        setNewJob({ ...newJob, [event.target.name]: event.target.value });
        setError("");
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const job = await jobsService.create(newJob);
            setNewJob(job);
        } catch {
            setError("Job Creation Failed - Try Again");
        }
    }

    return (
      <div ClassName="form-container">
        
      </div>
    );
}