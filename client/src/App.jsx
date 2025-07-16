import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
// import OpportunitiesPage from './pages/OpportunitiesPage';
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/opportunities" element={<OpportunitiesPage />} /> */}
        </Routes>
      </main>
      <Footer />
      <Toaster /> 
    </div>
  )
}

export default App