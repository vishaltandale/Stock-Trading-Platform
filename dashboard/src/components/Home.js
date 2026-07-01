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
const loginUrl = process.env.REACT_APP_LOGIN_URL || 'https://zerodha-clone-nine-xi.vercel.app/login';
if (!data.status) {
  window.location.href = loginUrl;
}

      } catch (error) {
        const loginUrl = process.env.REACT_APP_LOGIN_URL || 'https://zerodha-clone-nine-xi.vercel.app/login';
        window.location.href = loginUrl;
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
