import React, { useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:3002/me", {
          withCredentials: true,
        });
        if (!data.status) {
          window.location.href = "http://localhost:3000/login";
        }
      } catch (error) {
        window.location.href = "http://localhost:3000/login";
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
