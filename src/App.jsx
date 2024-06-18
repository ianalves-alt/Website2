import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header.jsx'
import Hero from './components/hero.jsx'
import Section1 from './components/section1.jsx'
import Section2 from './components/section2.jsx'
import Section3 from './components/Section3.jsx'
import Section4grid from './components/section4grid.jsx'
import Footer from './components/footer.jsx'
function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4grid></Section4grid>
      <Footer></Footer>

    </>
  )
}

export default App
