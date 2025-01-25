import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

const Profile = ({ user, setUser }) => {
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiry');
    setUser(null);
    navigate('/');
    window.location.reload(); // Reload the page to reset the state
  };

  const handleEditImage = () =>{
    alert("feature to upload a new profile image coming soon");
  };

  const handleSave = () =>{
    setUser(editedUser);
    setEditing(false);
    alert("Profile updated successfully");
  };

  const handleHomeClick = () =>{
    navigate('/');
    window.location.reload(); // Reload the page to reset the state
  }

  if (!user) {
    return <div>Loading...</div>;
  }


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">GlobeTogether</h1>
          <div className="flex gap-4">
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
             onClick={handleHomeClick}>
              <i className="fas fa-home"></i>
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <i className="fas fa-cog"></i>
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={user.profileImage || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
            />
            <button
              onClick={handleEditImage}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Edit Image
            </button>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-800">{user.fullName}</h2>
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">Phone: {user.phone || "N/A"}</p>
        </div>

        {/* Edit Buttons Section */}
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Username</span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Email</span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Phone Number</span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">About Me</h3>
          <textarea
            className="w-full mt-2 p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={editedUser.bio}
            onChange={(e) =>
              setEditedUser({ ...editedUser, bio: e.target.value })
            }
            rows="4"
          >lorem30</textarea>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between items-center">
          <button
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            onClick={handleSignout}
          >
            Sign Out
          </button>
          <button
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
