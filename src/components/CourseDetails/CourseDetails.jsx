import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Footer from "../footer/Footer";
import BackNav from "../backNav/BackNav";

import { icons } from "@/assets/images";

let CourseDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const location = useLocation();
  const {
    teacher_image,
    teacher_name,
    teacher_position,
    about_course,
    views,
    duration,

    course_type,
    course_name,
    course_description,
    time_span,
    lectures,
    video_lessons,
    students,
    bg_image,
  } = location.state || {};
  const goBack = () => {
    window.history.back();
  };

  const goToPlayCourse = () => {
    navigate("/play_course", {
      state: {
        teacher_image: teacher_image,
        teacher_name: teacher_name,
        teacher_position: teacher_position,
        about_course: about_course,
        views: views,
        duration: duration,
      },
    });
  };

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  useEffect(() => {
    async function getUsers() {
      try {
        const result = await axios("");
        setUsers(result.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    }
    getUsers();
  }, []);

  return (
    <div className="relative ">
      <BackNav pageName="Course Details" />
      {loading ? (
        <div className="loading-placeholder"></div>
      ) : (
        <div
          className={`loading-placeholder w-full h-[460px]   bg-cover bg-center`}
          style={{ backgroundImage: `url(${bg_image})` }}
        ></div>
        /* <div className="loading-placeholder w-full h-[460px]"></div> */
      )}

      <div className="hero-overlay w-full h-[460px]   absolute top-[60px] z-10"></div>

      <div className="absolute w-full top-72  z-40">
        <div className="hero-content ml-4  text-white z-30">
          <p>{course_type}</p>
          <p className="text-[40px] font-bold mt-2">{course_name}</p>
        </div>

        <div className="relative">
          <div className="w-[88%] h-auto p-6 mt-5 text-center bg-bodyColor absolute left-1/2  transform -translate-x-1/2     border rounded-lg ">
            <div className="px-4">
              <p className="text-3xl font-bold  mb-3">Course description</p>
              <p className="text-lg">{course_description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* this is unnececery text, it's opacity is 0, just it takes space to bring the other content to bottom */}
      <div className="relative opacity-0">
        <div className="w-[88%] h-auto p-6 mt-5 text-center bg-bodyColor relative left-1/2  transform -translate-x-1/2     border rounded-lg ">
          <div className="px-4">
            <p className="text-3xl font-bold  mb-3">Course description</p>
            <p className="text-lg">{course_description}</p>
          </div>
        </div>
      </div>
      {/* ------>>> */}

      <div className=" grid grid-cols-2 px-4 gap-y-4">
        <div className="   flex flex-col items-center mb-5 ">
          <img className="w-12 mb-2" src={icons.alarm} />
          <p className="text-2xl font-bold">Time Span</p>
          <p className="text-xl font-bold">{time_span}</p>
        </div>

        <div className="   flex flex-col items-center mb-5 ">
          <img className="w-12 mb-2" src={icons.conference} />
          <p className="text-2xl font-bold">Lectures</p>
          <p className="text-xl font-bold">{lectures}</p>
        </div>

        <div className="   flex flex-col items-center mb-5 ">
          <img className="w-12 mb-2" src={icons.video} />
          <p className="text-2xl font-bold">Video Lessons</p>
          <p className="text-xl font-bold">{video_lessons}</p>
        </div>

        <div className="   flex flex-col items-center mb-5 ">
          <img className="w-12 mb-2" src={icons.user} />
          <p className="text-2xl font-bold">Students</p>
          <p className="text-xl font-bold">{students}</p>
        </div>
      </div>

      <div className="text-center font-bold px-7 pt-12 pb-10">
        <p className=" text-3xl pb-3 ">Are you ready to join this course?</p>
        <div className="my-7">
          <button
            onClick={goToPlayCourse}
            className="w-full py-4 px-9 text-lg rounded-md  bg-ourOrange  hover:bg-[#e0a334] transition mb-4"
          >
            Enroll Now
          </button>

          <button
            onClick={goBack}
            className="w-full py-4 px-9 text-lg rounded-md border border-ourOrange  hover:text-[#ffffffca] transition "
          >
            Go Back
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetails;
