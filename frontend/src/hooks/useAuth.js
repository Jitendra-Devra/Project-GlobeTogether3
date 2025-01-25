import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const toastShownRef = useRef(false); // Ref to track if the toast has been shown

  useEffect(() => {
    const token = localStorage.getItem('token');
    const tokenExpiry = localStorage.getItem('tokenExpiry');
    const currentTime = new Date().getTime();

    if (token && tokenExpiry && currentTime < tokenExpiry) {
      axios.get('http://localhost:5001/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          setUser(response.data);
          // Check if the toast has already been shown
          if (!toastShownRef.current) {
            toast.success(`Welcome back, ${response.data.fullName}!`);
            toastShownRef.current = true; // Set the ref to true after showing the toast
          }
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiry');
    }
  }, []);

  return { user, setUser };
};

export default useAuth;