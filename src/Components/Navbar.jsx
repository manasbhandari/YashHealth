import React from 'react'
import logo from "../Assets/logo.png"
import { Link } from 'react-router-dom';
let isMenuOpen = false;



const handleButtonClick = () => {
  // Replace 'PHONE_NUMBER' with the actual phone number including the country code
  const phoneNumber = '9424079746';
  
  // Create the WhatsApp chat link
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  
  // Open the WhatsApp chat link in a new tab/window
  window.open(whatsappLink, '_blank');

};

function toggleMenu() {
  const navbar = document.getElementById('navbar-collapse-with-animation');

  if (isMenuOpen) {
    navbar.classList.add('hidden');
    navbar.classList.remove('block');
  } else {
    navbar.classList.remove('hidden');
    navbar.classList.add('block');
  }

  isMenuOpen = !isMenuOpen;
}



const Navbar = () => {
  return (
    <div>
     
<header class="backdrop-blur-sm fixed flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
  <nav class="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto " aria-label="Global">
    <div class="flex items-center justify-between">
      <Link to="/"  class="flex-none text-xl font-semibold" 
       href="#" aria-label="Brand"><h1 className=''><img className='h-12 ' src={logo} alt="" /></h1></Link>
      <div class="md:hidden">
        <button onClick={toggleMenu} type="button" class="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
      <div class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
        <Link  to="/" class="font-medium  text-gray-500 hover:text-blue-400 md:py-6" href="#" aria-current="page">Home</Link>
        <Link to="/Types" class="font-medium text-gray-500 hover:text-blue-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" >Types</Link>
        <Link to="/Blogs" class="font-medium text-gray-500 hover:text-blue-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">Blogs</Link>
        <Link to="/About" class="font-medium text-gray-500 hover:text-blue-400 md:py-6  " href="#">About-us</Link>

        <a onClick={handleButtonClick} class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" href="#">
          GET START
        </a>
      </div>
    </div>
  </nav>
</header>

    </div>
  )
}

export default Navbar
