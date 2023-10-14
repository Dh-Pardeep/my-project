
import React from 'react'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Hero from './components/view/Hero'
import From from './components/view/From'
import Questions from './components/view/Questions'
import MyFooter from './components/common/MyFooter'
import BackToTop from './components/common/BackToTop';
import LoaderHome from './components/common/LoaderHome';
const App = () => {
  useEffect(() => {
    AOS.init({
      once: true
    })
  }, [])
  return (
    <div className='overflow-hidden '>
      <BackToTop />
      <LoaderHome />
      <Hero />
      <From />
      <Questions />
      <MyFooter />
    </div>
  )
}

export default App