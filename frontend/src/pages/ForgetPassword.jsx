import React, { useState } from "react";

const ForgetPassword = ({ isOpen, onClose, onLoginOpen }) => {
  const [email, setEmail] = useState(""); // to store the email input value

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle the password reset functionality here (e.g., API call)
    setEmail(""); // Reset email after submission
  };

  if (!isOpen) return null; // Don't render the modal if isOpen is false

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-4">
      {/* Modal Content */}
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
          Reset Your Password
        </h2>

        {/* Modal Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Enter your email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>

        {/* Link to login page */}
        <p className="mt-4 text-sm text-center">
          Remembered your password?{" "}
          <button
            onClick={onLoginOpen}
            className="text-blue-500 font-bold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
