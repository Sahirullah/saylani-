import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import SuccessStories from './components/SuccessStories'
import Gallery from './components/Gallery'
import NewsEvents from './components/NewsEvents'
import Contact from './components/Contact'
import Donate from './components/Donate'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Programs />
        <SuccessStories />
        <Gallery />
        <NewsEvents />
        <Contact />
        <Donate />
      </main>
      <Footer />
    </div>
  )
}

export default App