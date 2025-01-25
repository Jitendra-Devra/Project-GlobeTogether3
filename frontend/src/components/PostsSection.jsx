import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import AddPostModal from "./AddPostModal";

const PostsSection = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Fetch Posts from Backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  // Add New Post
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post at the top
  };

  return (
    <div className="p-8 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      {/* Header */}
      <div className="relative mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Globe Gather : </h1>
        <button
          className="absolute top-0 right-0 bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md transition-all hover:shadow-lg hover:shadow-blue-400 hover:bg-blue-600"
          onClick={() => setShowModal(true)}
        >
          Add Post +
        </button>
      </div>

      {/* Posts Grid */}
      <div className="flex flex-col gap-6">
        {posts.length > 0 ? (
          posts.map((post, index) => <PostCard key={index} post={post} />)
        ) : (
          <p className="text-gray-700 text-center">No posts available.</p>
        )}
      </div>

      {/* Add Post Modal */}
      {showModal && (
        <AddPostModal onClose={() => setShowModal(false)} onAddPost={addPost} />
      )}
    </div>
  );
};

export default PostsSection;