import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import MoreDestinations from './components/MoreDestinations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from './hooks/useAuth';

const App = () => {
  const { user, setUser } = useAuth();
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout user = {user} setUser={setUser}>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route path="/profile" element={<Profile user={user} setUser={setUser}/>} />
        <Route path="/destinations" element={<MoreDestinations />} />
      </Routes>
    </Router>
  );
};

export default App;