import { useState } from "react";
import NewJobForm from "../NewJobForm/NewJobForm";
import * as jobsService from "../../utilities/jobs-service";

export default function editJob({ jobs, setJobs }) {

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
        const updatedJob = await jobsService.update(_id);
        console.log(updatedJob);
        setJobs(updatedJob);
        return (
            <NewJobForm
                newJob={newJob}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                error={error}
            />
        );
    }
}