import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Home'
import Posts from './pages/Posts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar />
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/posts" element={<Posts/>} />
        </Routes>
      </Router>
    </div>
    <p className="footer">
      © Copyright 2025 Sapan Gajjar. All rights reserved.  
    </p>
    </>
  )
}

export default App
