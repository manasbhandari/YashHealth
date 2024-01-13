import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import videos from '../Assets/videos.mp4'

const src =
  "https://youtu.be/D2Q2albPgFM?si=G7YwUEgJZlwssrtA";

const Story = () => {
  return (
    <div>
  <Navbar/>
  <br />
  <br />
  <br />
  <br />
  <br />
  <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">यश हेल्थ का पूरा विवरण - वीडियो </h2>
        </div>
        
     
<div class="flex  justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
   
<video className='h-[32rem]  rounded' controls autoPlay="true" src={videos} />

    
 
</div>

<Footer/>

    </div>
  )
}

export default Story
