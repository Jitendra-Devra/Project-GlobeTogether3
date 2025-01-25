import React, { useState } from "react";
import axios from "axios";
import logoImage from "../assets/favicon.ico"; // Adjust the path as necessary
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = ({ isOpen, onClose, onLoginOpen, setUser }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/auth/register",
        { fullName, email, password }
      );
      // Handle successful signup (e.g., save token, redirect)
      toast.success(`Signup successful ${response.data.fullName}!`);
      console.log(response.data);
      // Save token to localStorage with expiry time (1 day)
      const token = response.data.token;
      const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 1 day in milliseconds
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiry", expiryTime);
      // Update user state
      setUser(response.data.user);
      // Close the modal
      onClose();
    } catch (error) {
      // Handle error
      if (error.response && error.response.status === 400) {
        toast.error("User already exists!");
      } else {
        toast.error("Signup failed!");
      }
      console.error(error);
    }
    window.location.reload(); // Reload the page to reset the state
  };
  if (!isOpen) return null; // Return nothing if modal is closed

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-4 ">
      <ToastContainer />
      <div className="modal-content flex flex-col items-center max-w-[600px] mx-auto gap-5 p-8 bg-gradient-to-b from-[#a0c4ff] to-[#e4f0ff] rounded-lg text-center relative font-sans animate-fadeIn">
        {/* Close Button */}
        <span
          className="absolute top-2 right-4 text-xl text-gray-800 cursor-pointer font-bold transition-colors duration-300 ease-in-out hover:text-red-500"
          onClick={onClose}
        >
          &#x2715;
        </span>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold mb-4 text-center">
          Sign Up for GlobeTogether
        </h2>

        <div className="modal-layout flex justify-between items-center gap-5 w-full">
          {/* Logo */}
          <div className="modal-image flex-1 text-center flex justify-center items-center">
            <img
              src={logoImage}
              alt="Logo"
              className="max-w-full h-auto rounded-lg object-contain"
            />
          </div>

          {/* Form */}
          <div className="modal-form w-1/2 flex-1">
            <form onSubmit={handleSignup}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />

              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </form>

            <p className="text-sm mt-4 text-center">
              Already have an account?{" "}
              <button
                onClick={onLoginOpen}
                className="text-blue-500 font-bold hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
