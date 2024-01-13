import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Types from "./Pages/Types";
import Story from "./Pages/About";
import AllPosts from "./Components/AllPosts"
import OnePost from "./Components/SinglePost"
import { SpeedInsights } from '@vercel/speed-insights/react';



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Types" element={<Types />} />
        <Route path="/About" element={<Story />} />
        <Route path="/Blogs" element={<AllPosts />} />
        <Route path="/:slug" element={<OnePost />} />
        
      </Routes>
    </>
  );
};

export default App;
