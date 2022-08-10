import React, {useState} from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {  
  const [annyeong, setAnnyeong] = useState('안녕하세요 여러분')
  const [rams, setRams] = useState('')
  const [sram, setSrams] = useState('')
  const [eon, setEon] = useState('')

  const feel = {
    annyeong, setAnnyeong, rams, setRams, sram, setSrams, eon, setEon
  }
  return (
    <Router>
    <>
        <Nav />
        <Routes>
        <Route exact path="/" element={<Header feel={feel} />} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path="/experience" element={<Experience/>} />
        <Route exact path="/portfolio" element={<Portfolio/>} />
        <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </>
      </Router>
  )
}

export default App