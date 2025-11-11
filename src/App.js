// src/App.js

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// Components
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import ChatWidget from './components/ChatWidget'; 

// Home Page Sections
import HeroSection from './components/HeroSection';
import ContentLayout from './components/ContentLayout';
import FAQSection from './components/FAQSection';

// Pages
import SurveyPage from './pages/SurveyPage'; 
import LatestNews from './pages/LatestNews'; 
import VideoReports from './pages/VideoReports'; 
import LocalEvents from './pages/LocalEvents'; 
import NewsMediaPage from './pages/NewsMediaPage'; 
import ContactPage from './pages/ContactPage'; 

// 🔑 NEW IMPORTS for Authentication Pages
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'; 

// Home Page Layout
const HomePage = ({ searchValue }) => (
  <main>
    <HeroSection />
    {/* Pass searchValue down so ContentLayout can filter news */}
    <ContentLayout searchValue={searchValue} />
    <FAQSection />
  </main>
);

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <BrowserRouter>
      <Box>
        <AppHeader 
          searchValue={searchValue}
          onSearchChange={setSearchValue}
        />
        
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={<HomePage searchValue={searchValue} />} />
          
          {/* CITY INSIGHTS DROPDOWN ROUTES */}
          <Route path="/news" element={<LatestNews />} />
          <Route path="/videos" element={<VideoReports />} />
          <Route path="/events" element={<LocalEvents />} />
          
          {/* Main Navigation Routes */}
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/media" element={<NewsMediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* 🔑 NEW AUTHENTICATION ROUTES */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          
        </Routes>

        <ChatWidget /> 
        <AppFooter />
      </Box>
    </BrowserRouter>
  );
}

export default App;
