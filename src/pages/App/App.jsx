import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import NewJobForm from "../../components/NewJobForm/NewJobForm";
import JobsList from "../../components/JobsList/JobsList";
import * as jobsService from "../../utilities/jobs-service";
import EditJob from "../../components/EditJob/EditJob";
import JobDetail from "../../components/JobDetail/JobDetail";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const jobs = await jobsService.getAllJobs();
      setJobs(jobs);
    }
    getJobs();
  }, []);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NewJobForm
                    className="new-job-form"
                    setJobs={setJobs}
                    jobs={jobs}
                  />
                  <JobsList setJobs={setJobs} jobs={jobs} />
                </>
              }
            />
            <Route
              path="/edit/:id"
              element={<EditJob setJobs={setJobs} jobs={jobs} />}
            />
            <Route path="/show/:id" element={<JobDetail jobs={jobs} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
