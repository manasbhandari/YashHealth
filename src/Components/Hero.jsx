import React from 'react'
import heroimage from "../Assets/heroimage.jpeg"


const handleButtonClick = () => {
    // Replace 'PHONE_NUMBER' with the actual phone number including the country code
    const phoneNumber = '9424079746';
    
    // Create the WhatsApp chat link
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    
    // Open the WhatsApp chat link in a new tab/window
    window.open(whatsappLink, '_blank');
  };


const Hero = () => {
  return (
    <div>
       
<div class="relative max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
  
  <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div>
      <h1 class="block text-3xl pt-14 font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight ">अपने स्वास्थ्य की यात्रा  <span class="text-blue-600">"यश हेल्थ" </span>के साथ शुरू करें। </h1>
      <p class="mt-3 text-lg ">एक समृद्ध स्वास्थ्य हब जो व्यक्तिगत देखभाल और सशक्तता का स्रोत है। सुरक्षित स्वास्थ्य सुझाव, जीवनशैली में सुधार, और विशिष्ट स्वास्थ्य समस्याओं का समर्थन - यहां हैं आपके लिए उपकरण और ज्ञान का एक संपूर्ण स्रोत।</p>

     
      <div class="mt-7 grid gap-3 w-full sm:inline-flex">
        <a onClick={handleButtonClick} class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        शुरू करें
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
        <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white  shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  " href="#">
        अधिक जानकारी
        </a>
      </div>
    </div>
    

    <div class=" relative ms-4">
      <img class="w-full h-full rounded-md" src='https://img.freepik.com/free-vector/nurse-putting-injection-concept-illustration_114360-22270.jpg?w=1380&t=st=1703773321~exp=1703773921~hmac=850f870f6b7bd50d65b1ffedf47c7ab38b5c8cc7f66da094bf6017452118c2dc' alt="Image Description"></img>
     
    </div>
    
  </div>
  
</div>



</div>
  )
}

export default Hero
