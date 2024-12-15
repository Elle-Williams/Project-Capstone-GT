import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <LandingPage />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route
          path="/register"
          element={user ? <Navigate to={"/"} /> : <Register />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <Login />}
        />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
