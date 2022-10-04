import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import { HomePage } from "./pages/HomePage/HomePage";


export default function AppRoutes() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<HomePage />}/>
            <Route path="*"element={<h1>404</h1>}/>          
        </Routes>
    </>
  );
}
