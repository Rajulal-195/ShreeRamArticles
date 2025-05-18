import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import LoginPage from './AdminDashboard/Loginpage'
import Header from './Comp/Header'
import About from './Pages/About'
import Footer from './Comp/Footer'
import Project from './Pages/Project'
import Nodata from './Comp/Nodata'
import QuaryRequest from './AdminDashboard/QuaryRequest'
import FeedBack from './Pages/FeedBack'

export default function App() {
  return (

    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quary" element={<QuaryRequest />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/adminlogin" element={<LoginPage />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Nodata />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}
