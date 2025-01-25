import logoImage from "../assets/favicon.ico"; // Adjust the path as necessary
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signin = ({
  isOpen,
  onClose,
  onSignupOpen,
  onForgotPasswordOpen,
  setUser,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/auth/login",
        { email, password }
      );
      // Handle successful login (e.g., save token, redirect)
      console.log(response.data);
      // Save token to localStorage with expiry time (1 day)
      const token = response.data.token;
      const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 1 day in milliseconds
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiry", expiryTime);
      //update user state
      setUser(response.data.user);
      // Close the modal
      onClose();
      navigate("/"); // Redirect to home page
    } catch (error) {
      // Handle error
      if (error.response && error.response.status === 400) {
        toast.error("Invalid credentials!");
      } else {
        toast.error("Login failed!");
      }
      console.error(error);
    }
    window.location.reload(); // Reload the page to reset the state
  };
  if (!isOpen) return null; // Return nothing if modal is closed

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-4 ">
      <ToastContainer />
      {/* Modal Content */}
      <div className="modal-content relative flex flex-col items-center max-w-[600px] mx-auto gap-5 p-8 bg-gradient-to-b from-[#a0c4ff] to-[#e4f0ff] rounded-lg text-center  font-sans animate-fadeIn">
        {/* Close Button */}
        <span
          className="absolute top-2 right-4 text-xl text-gray-800 cursor-pointer font-bold transition-colors duration-300 ease-in-out hover:text-red-500"
          onClick={onClose}
        >
          &#x2715;
        </span>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold mb-4 text-center">
          Login to GlobeTogether
        </h2>

        {/* Modal Layout */}
        <div className="modal-layout flex justify-between items-center gap-5 w-full ">
          {/* Left Section: Logo/Image */}
          <div className="modal-image flex-1 text-center flex justify-center items-center ">
            <img
              src={logoImage}
              alt="Logo"
              className="max-w-full h-auto rounded-lg object-contain"
            />
          </div>

          {/* Right Section: Form */}
          <div className="modal-form w-1/2 flex-1">
            <form onSubmit={handleSignin}>
              {/* Username Input */}
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* Password Input */}
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Forgot Password */}
              <div className="text-right mb-4">
                <a
                  href="#"
                  className="text-blue-500 text-sm hover:underline"
                  onClick={onForgotPasswordOpen}
                >
                  Forgot your password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={handleSignin}
              >
                Login
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="mt-4 text-sm text-center">
              Don't have an account?{" "}
              <button
                onClick={onSignupOpen}
                className="text-blue-500 font-bold hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
