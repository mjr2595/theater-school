import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ClassDetailPage from "./pages/ClassDetailPage";
import ClassesPage from "./pages/ClassesPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import MerchPage from "./pages/MerchPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="classes" element={<ClassesPage />} />
                <Route path="classes/:classId" element={<ClassDetailPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="merch" element={<MerchPage />} />
                <Route path="profile" element={<ProfilePage />} />
            </Routes>
        </div>
    );
}

export default App;
