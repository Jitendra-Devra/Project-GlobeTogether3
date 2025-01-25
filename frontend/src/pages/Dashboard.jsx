import React, { useRef } from 'react';
import TrendingPage from '../components/TrendingPage';
import PostsSection from '../components/PostsSection';
import MoreDestinations from '../components/MoreDestinations';

const Dashboard = () => {
  const postsSectionRef = useRef(null);

  // Scroll function
  const scrollToPosts = () => {
    if (postsSectionRef.current) {
      postsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <TrendingPage />
      <div ref={postsSectionRef}>
        <PostsSection />
      </div>
      {/* <MoreDestinations /> */}
    </>
  );
};

export default Dashboard;