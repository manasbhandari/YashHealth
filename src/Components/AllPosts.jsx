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
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">आरोग्य केंद्र: जीवन के लिए सरल स्वास्थ्य जानकारी</h2>
            <p className="mt-4  text-xl leading-7 text-gray-600 sm:mt-8 font-pj">हम आपके आरोग्य की देखभाल के लिए एक समृद्धि स्थल, हमारा आरोग्य केंद्र आपको सुरक्षित और स्वस्थ जीवन की ओर मार्गदर्शित करता है। हमारी विशेषज्ञ सलाह, उन्नत सेवाएं, और सौजन्यपूर्ण वातावरण में, यहां आपका स्वास्थ्य सर्वोत्तम हाथों में है। आइए, साथ मिलकर स्वस्थ और समृद्ध जीवन की ओर एक कदम बढ़ाएं!</p>
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