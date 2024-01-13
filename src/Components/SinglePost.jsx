import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import sanityClient from "../sanityClient"
import BlockContent from "@sanity/block-content-to-react"



// For top scroll bar animated
import { motion, useScroll } from "framer-motion"
import Navbar from './Navbar'

// import { useNavigate } from 'react-router-dom';


const SinglePost = () => {

  const [SinglePost, setSinglePost]  = useState([])
  const [isLoading , setIsLoading] = useState(true)
  const { slug } = useParams()


  const { scrollYProgress } = useScroll();
  
  // const navigate = useNavigate();


  useEffect(() => {
    sanityClient.fetch(
      `
        *[slug.current == "${slug}"] {
          title,
          body,
          mainImage {
            asset -> {
              _id,
              url,
            },
            alt
          }
        }
      `
    ).then((data) => setSinglePost(data[0]))
    setIsLoading(false);
  }, [slug])

  return (
    <div>
      <Navbar/>
      <motion.div className='fixed top-0 left-0 right-0 h-[10px] bg-[#307fe6] origin-top-left' style={{ scaleX: scrollYProgress }} />  
      {/* <button className=' text-white py-2 px-4 text-xl font-medium rounded-md' onClick={() => navigate(-1)}>Back</button> */}
      
      {isLoading ? (
          
            <h1 className='uppercase font-bold text-4xl tracking-wide nb-5 md:text-6xl flex items-center justify-center h-screen'>Loading...</h1> 
          
        ): 
        <section className='px-5  py-11 xl:max-w-6xl xl:mx-auto pb-10'>
          
          <motion.div
            className='mt-10' 
            style={{ y: 30 }} animate={{ y: 0 }}
            transition={{duration: 0.5, delay: 0.1}}
          >
            
            <h1 
              style={{
                fontFamily: "'Sriracha', cursive"
              }} 
              className="text-4xl md:text-6xl pt-5 mb-10 text-center " 
            >
              {SinglePost.title}
            </h1>
          </motion.div>
          
          
          {SinglePost.mainImage && SinglePost.mainImage.asset && (
             <motion.div 
              style={{ x: -200 }} animate={{ x: 0 }}
              transition={{duration: 0.6}}
             >
              <img className='blog_image rounded-lg mx-auto' src={SinglePost.mainImage.asset.url} alt={SinglePost.title} title={SinglePost.title} />
             </motion.div>
          )} 
          

          <div className='block_content'>
            <BlockContent className='text-xl md:mx-28' blocks={SinglePost.body} projectId="j9hr7ou5" dataset="production" ></BlockContent>
          </div>

          <div className='flex flex-col justify-center items-center md:my-11'>
            <h3 className='my-4 text-lg font-semibold text-zinc-700'>Follow me on</h3>
            
          </div>

          <button className='mt-10 mb-10 block mx-auto'>
            <Link to='/Blogs' className='py-2 px-6 rounded shadow text-white bg-[#307fe6] hover:bg-transparent border-2 border-[#307fe6] transition-all duration-500 hover:text-[#307fe6] font-bold'>Read More Articles</Link>
          </button>
        </section>
      }
    </div>
  )
}

export default SinglePost