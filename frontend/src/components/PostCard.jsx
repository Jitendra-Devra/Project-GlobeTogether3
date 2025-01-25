import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 shadow-lg rounded-lg p-6 gap-4">
      {/* User Image */}
      <img
        src={post.image}
        alt="User"
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-sm"
      />

      {/* User Details */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 ml-8">Name:{post.name}</h2>
        <div className="text-xl text-gray-700 space-y-2 ml-8">
          <p>
            <strong className="font-semibold">Date:</strong> {post.date}
          </p>
          <p>
            <strong className="font-semibold">Destination:</strong> {post.destination}
          </p>
          <p>
            <strong className="font-semibold">Description:</strong> {post.description}
          </p>
          <p>
            <strong className="font-semibold">People Needed:</strong> {post.peopleNeeded}
          </p>
        </div>
      </div>
      {/* Join Group Button */}
      <button className="bg-blue-500 text-white px-7 py-4 rounded-xl shadow-lg hover:shadow-lg hover:bg-blue-700 transition">
        Join Group
      </button>
       {/* Chat Button */}
       <button className="bg-blue-500 text-white px-7 py-4 ml-6 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 transition">
        Chat
      </button>
    </div>
    
  );
};

export default PostCard;