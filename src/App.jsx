import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import ScienceEc from './pages/ScienceEc'
import Newsletter from './pages/Newsletter'
import Sponsors from './pages/Sponsors'
import QuantumLeap from './pages/QuantumLeap'
import CognitiveChronicle from './pages/CognitiveChronicle'
import MathematicalChronicle from './pages/MathematicalChronicle'
import CodeOfLife from './pages/CodeOfLife'
import ComputeDispatch from './pages/ComputeDispatch'
import AboutTheDev from './pages/AboutTheDev'
import Alumni from './pages/Alumni'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/science-ec" element={<ScienceEc />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/newsletter/quantum-leap" element={<QuantumLeap />} />
        <Route path="/newsletter/cognitive-chronicle" element={<CognitiveChronicle />} />
        <Route path="/newsletter/mathematical-chronicle" element={<MathematicalChronicle />} />
        <Route path="/newsletter/code-of-life" element={<CodeOfLife />} />
        <Route path="/newsletter/compute-dispatch" element={<ComputeDispatch />} />
        <Route path="/about-the-dev" element={<AboutTheDev />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  )
}