import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import NewJobForm from "../../components/NewJobForm/NewJobForm";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
  <main className="App">
      {user ?
      <>
          <NavBar user={user} setUser={setUser} />
          <NewJobForm />
        <Routes>
          {/* Route components in here */}
            <Route path='/orders/new' element={<NewOrderPage user={user} />} />
          <Route path='/orders' element={<OrderHistoryPage />} />
        </Routes>
      </>
      :
        <AuthPage setUser={setUser} />
    }
  </main>
);
}



 
