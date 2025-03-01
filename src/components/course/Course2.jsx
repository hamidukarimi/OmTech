import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Course2 = ({
  rates,
  image,
  type,
  price,
  title,
  description,
  lessons,
  members,
  time_span,
  lectures,
  video_lessons,
  bg_image,
  teacher_image,
  teacher_name,
  teacher_position,
  about_course,
  views,
  duration,
  handleBookmark,

  nextV_image_1,
  nextV_video_1,
  nextV_title_1,
  nextV_views_1,
  nextV_duration_1,

  nextV_image_2,
  nextV_video_2,
  nextV_title_2,
  nextV_views_2,
  nextV_duration_2,

  nextV_image_3,
  nextV_video_3,
  nextV_title_3,
  nextV_views_3,
  nextV_duration_3,

  nextV_image_4,
  nextV_video_4,
  nextV_title_4,
  nextV_views_4,
  nextV_duration_4,
}) => {
  const navigate = useNavigate();
  const [navigateAfterDelay, setNavigateAfterDelay] = useState(false);

  // Navigate to Course Details with a short delay (for button transition)
  const goToCourseDetails = () => {
    setNavigateAfterDelay(true);
    setTimeout(() => {
      navigate("/course_details", {
        state: {
          teacher_image,
          teacher_name,
          teacher_position,
          about_course,
          views,
          duration,
          course_type: type,
          course_name: title,
          course_description: description,
          time_span,
          lectures,
          video_lessons,
          students: members,
          bg_image,
        },
      });
    }, 340);
  };

  // Navigate directly to Play Course
  const goToPlayCourse = () => {
    navigate("/play_course", {
      state: {
        teacher_image,
        teacher_name,
        teacher_position,
        about_course,
        views,
        duration,


        nextV_image_1,
        nextV_video_1,
        nextV_title_1,
        nextV_views_1,
        nextV_duration_1,

        nextV_image_2,
        nextV_video_2,
        nextV_title_2,
        nextV_views_2,
        nextV_duration_2,

        nextV_image_3,
        nextV_video_3,
        nextV_title_3,
        nextV_views_3,
        nextV_duration_3,

        nextV_image_4,
        nextV_video_4,
        nextV_title_4,
        nextV_views_4,
        nextV_duration_4,
      },
    });
  };

  return (
    <div
      className={` relative w-full h-[490px] rounded-md bg-darkGray px-4 bg-no-repeat bg-cover mb-12`}
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <span className="absolute top-5 right-5 z-20 w-14 h-14 bg-blue-600 rounded-full flex justify-center items-center font-bold">
        {price}
      </span>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      {/* content */}
      <div className="relative z-20 top-44">
        <p>{type}</p>
        <p className="text-2xl font-bold my-5 ">{title}</p>
        <div className="text-ourOrange mb-6">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span className="text-slate-300 ml-2">{rates}</span>
        </div>

        <button
          onClick={goToCourseDetails}
          className="w-full h-[50px] bg-darkGray hover:bg-[#292929]  transition rounded-sm mb-3"
        >
          {navigateAfterDelay ? (
            <FontAwesomeIcon
              className="animate-[spin_1.2s_infinite_linear]"
              icon={faSpinner}
            />
          ) : (
            "Course Details"
          )}
        </button>
        <button onClick={goToPlayCourse} className="w-full h-[50px] bg-ourOrange hover:bg-[#efaf3a] transition  rounded-sm">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Course2;
