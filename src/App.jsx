import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

// Import Pages
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import GalleryPage from './pages/GalleryPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import DonatePage from './pages/DonatePage'

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App