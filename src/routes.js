import React from "react";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Header/Navbar";
import LoginContext from "./context/LoginContext";
import { Colabora } from "./pages/colabora/colabora";
import { HomePage } from "./pages/HomePage/HomePage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";

export default function AppRoutes() {
  const context = useContext(LoginContext);
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<HomePage />}/>
            <Route path="/Login" exact element={<LoginPage />} />
            <Route path="/Cadastro" exact element={<SignUpPage />} />
            {context.isLogged && <Route path="/colabora" exact element={ <Colabora /> } />}
            <Route path="*"element={<h1>404</h1>}/>          
        </Routes>
    </>
  );
}
