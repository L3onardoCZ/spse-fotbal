"use client"

import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AdminPanel from "@/components/AdminPanel";
import AuthPanel from "@/components/AuthPanel";
import { useState } from "react";
import axios from "axios"
axios.defaults.withCredentials = true;


export default function Admin() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  axios.get("http://localhost:3001/auth/check")
    .then((response) => {
      console.log("isLoggedIn", response.data.status);
      if(response.data.status == 200) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    })
    .catch((error) => {
      console.error(error);
    })

  return (
    <>
      <Navbar />
      { isLoggedIn ? <AdminPanel /> : <AuthPanel />}
      <Footer />
      <Background />
    </>
  )
}