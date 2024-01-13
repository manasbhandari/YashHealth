import React from 'react'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Navbar from '../Components/Navbar'

import Footer from '../Components/Footer'
import CallButton from '../Components/Callbutton.jsx';
import Story from '../Components/Story.jsx'
import ProcessSection from '../Components/ProcessSection.jsx'



const Home = () => {

  return (
    <div>
      <Navbar/>
      <br />
      <br />
      <br />
      <Hero/>
      <Features/>
      <ProcessSection/>
      <Story/>
      <CallButton/>
      <Footer/>
      
    </div>
  )
}

export default Home
