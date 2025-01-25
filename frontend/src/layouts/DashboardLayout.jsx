import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notification from '../pages/Notification';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import ForgetPassword from '../pages/ForgetPassword';
import Chatbot from '../components/Chatbot';
import BackgroundSlider from "../components/BackgroundSlider";
import bg1 from '../public/assets/bg1.jpg';
import bg2 from '../public/assets/bg2.jpg';
import bg3 from '../public/assets/bg3.jpg';


const DashboardLayout = ({ children, user,setUser }) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  // Ref for Posts Section
  const postsSectionRef = useRef(null);
  // Scroll function
  const scrollToPosts = () => {
    if (postsSectionRef.current) {
      postsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div
        className="main-header relative w-full h-[600px] bg-cover bg-center z-0"
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
         <BackgroundSlider
          images={[
            bg1,
            bg2,
            bg3,
          ]}
          duration={3000} // 5 seconds
          transition={1000} // 1-second fade transition
        />
        <div className="absolute top-0 w-full z-10">
        <Navbar openLogin={() => setLoginModalOpen(true)} scrollToPosts={scrollToPosts} user={user}/>

        <Header />
        </div>
      </div>
      
      <div ref={postsSectionRef}>
        {children}
      </div>


      <Footer />

      {/* Notification Popup */}
      <Notification />

      {/* Modal */}
      <Signin
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSignupOpen={() => {
          setLoginModalOpen(false);
          setSignupModalOpen(true);
        }}
        onForgotPasswordOpen={() => {
          setLoginModalOpen(false);
          setForgotPasswordOpen(true);
        }}
        setUser={setUser} // Pass setUser function to SignIn
      />
      {/* Signup Modal */}
      <Signup
        isOpen={isSignupModalOpen}
        onClose={() => setSignupModalOpen(false)}
        onLoginOpen={() => {
          setSignupModalOpen(false);
          setLoginModalOpen(true);
        }}
        setUser={setUser} // Pass setUser to Signup        
      />
      <ForgetPassword
        isOpen={isForgotPasswordOpen}
        onClose={() => setForgotPasswordOpen(false)}
        onLoginOpen={() => {
          setForgotPasswordOpen(false);
          setLoginModalOpen(true);
        }}
      />
      <Chatbot />
    </div>
  );
};

export default DashboardLayout;