import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import About from "./components/about/About";
import FAQ from "./components/faq/FAQ";
import PlayCourse from "./components/playCourse/PlayCourse";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import ContactPage from "./components/contact-page/ContactPage";
import Bookmarks from "./components/bookmarks/Bookmarks";
import FreeCourses from "./components/free-courses/FreeCourses";
import AllCourses from "./components/all-courses/AllCourses";
import SuggestedCourses from "./components/suggested-courses/SuggestedCourses";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define a named handler so we can properly remove it later
    const handleLoad = () => setLoading(false);

    // If the document is already loaded, set loading to false immediately.
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      // Otherwise, add the load event listener.
      window.addEventListener("load", handleLoad);
      // Cleanup the event listener when the component unmounts.
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div class="loader">
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
        </div>
      ) : (
        <Routes>


          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/About" element={<About />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/suggested-courses" element={<SuggestedCourses />} />
          <Route path="/free-courses" element={<FreeCourses />} />
          <Route path="/course_details" element={<CourseDetails />} />
          <Route path="/play_course" element={<PlayCourse />} />
        </Routes>
      )}
    </>
  );
};

export default App;
