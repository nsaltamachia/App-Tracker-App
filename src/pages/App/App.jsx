import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import NewJobForm from "../../components/NewJobForm/NewJobForm";
import JobsList from "../../components/JobsList/JobsList";
import * as jobsService from "../../utilities/jobs-service";
import EditJob from "../../components/EditJob/EditJob";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const jobs = await jobsService.getAllJobs();
      // console.log(jobs);
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
            {/* Route components in here */}
            <Route
              path="/"
              element={
                <>
                  <NewJobForm setJobs={setJobs} jobs={jobs} />
                  <JobsList setJobs={setJobs} jobs={jobs} />
                </>
              }
            />
            <Route path="/edit/:id" element={<EditJob jobs={jobs} />} />
            {/* <Route path="/orders/new" element={<NewOrderPage user={user} />} />
            <Route path="/orders" element={<OrderHistoryPage />} /> */}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
