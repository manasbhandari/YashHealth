// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../sanityClient"
import Navbar from "./Navbar.jsx";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
        asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
   <Navbar/>
   <br />
   <br />
   
    <div className=" min-h-screen p-12">

      <div className="mt-10 container mx-auto">
      <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">हमारी मुख्य विशेषताएँ</h2>
            <p className="mt-4  text-xl leading-7 text-gray-600 sm:mt-8 font-pj">हम सभी के लिए स्वास्थ्य को सुलभ और व्यक्तिगत बनाने में यह मानते हैं। हमारे समुदाय में शामिल हों और एक स्वस्थतम, खुशहाल जीवन की ओर एक सफल यात्रा शुरू करें!</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <span
                  className="block h-64 relative rounded shadow leading-snug bg-white
                      border-l-8 border-green-400"
                  key={index}
                >
                  <img
                    className="w-full h-full rounded-r object-cover absolute"
                    src={post.mainImage.asset.url}
                    alt=""
                  />
                  <span
                    className=" relative h-full flex justify-end items-end pr
                      -4 pb-4"
                  >
                    <h2
                      className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700
                         bg-opacity-75 rounded"
                    >
                      {post.title}
                    </h2>
                  </span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
    </div>
  );
}