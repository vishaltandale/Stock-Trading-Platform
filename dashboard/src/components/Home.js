import React, { useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.get(
  `${process.env.REACT_APP_API_URL}/me`,
  { withCredentials: true }
);
if (!data.status) {
  window.location.href = 'https://zerodha-clone-nine-xi.vercel.app/login';
}

      } catch (error) {
        window.location.href = 'https://zerodha-clone-nine-xi.vercel.app/login';
      }
    };
    verifyUser();
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
