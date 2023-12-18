import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import NewJobForm from "../../components/NewJobForm/NewJobForm";
import JobsList from "../../components/JobsList/JobsList";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [jobs, setJobs] = useState([
    {
      jobTitle: "title",
      companyName: "company",
      status: "filed",
    },
  ]);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <NewJobForm setJobs={setJobs} jobs={jobs} />
          <JobsList setJobs={setJobs} jobs={jobs} />
          <Routes>
            {/* Route components in here */}
            <Route path="/orders/new" element={<NewOrderPage user={user} />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
