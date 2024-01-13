import React from 'react'
import logo from "../Assets/logo.png"


const Footer = () => {
  return (
    <div>
      <footer class="bg-black">
    <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#">
            <img class="w-auto h-10" src={logo} alt=""></img>
        </a>

        <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Services
            </a>

            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                More details
            </a>

            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Terms of service 
            </a>

            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Help
            </a>

            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Privacy
            </a>
        </div>

        <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">Code and Designed by <a className='hover:text-blue-500' href='https://www.linkedin.com/in/manas0609/'>Manas Bhandari</a> </p>
        <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2023 Yash Health. </p>
        
    </div>
</footer>
    </div>
  )
}

export default Footer
