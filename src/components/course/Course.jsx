import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Course = ({
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

  // State to check if the main course image has finished loading
  const [imageLoaded, setImageLoaded] = useState(false);
  // State to handle the "Details" button spinner/transition
  const [navigateAfterDelay, setNavigateAfterDelay] = useState(false);

  // isLoading here is determined by whether the image has loaded
  const isLoading = !imageLoaded;

  // When the image loads, update the state
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

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
    }, 330);
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
    <div className="mb-14 relative border border-ourOrange overflow-hidden bg-courseBGcolor rounded-[12px]">
      <span
        onClick={handleBookmark}
        className="absolute top-3 right-3 text-3xl active:text-gray-300"
      >
        <FontAwesomeIcon icon={faBookmark} />
      </span>
      {/* Show skeleton placeholder for the image while it's loading */}
      {!imageLoaded && (
        <Skeleton
          height={200}
          width="100%"
          className="rounded-[12px_12px_0_0]"
        />
      )}
      {/* Render the image but hide it until it's loaded */}
      <img
        onLoad={handleImageLoad}
        src={image}
        alt="Course"
        className="w-full h-[290px] object-cover  rounded-[12px_12px_0_0]"
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      <div className="px-3 py-7">
        {isLoading ? (
          // Skeleton for text and buttons while loading
          <>
            <Skeleton width={100} baseColor="darkGray" />
            <Skeleton width={200} height={30} baseColor="darkGray" />
            <Skeleton count={3} baseColor="darkGray" />
            <div
              className="flex justify-center gap-5 px-6 mt-4"
              baseColor="darkGray"
            >
              <Skeleton width={145} height={48} baseColor="darkGray" />
              <Skeleton width={145} height={48} baseColor="darkGray" />
            </div>
          </>
        ) : (
          // Once the image is loaded, show the actual content
          <>
            <span className="absolute right-5 text-xl">{price}</span>

            <p className="font-normal">{type}</p>
            <p className="text-2xl mt-3">{title}</p>
            <div className="my-9 flex justify-between px-6">
              <p>{lessons} Lessons</p>
              <p>{members} Members</p>
            </div>
            <div className="flex justify-center gap-5 px-6">
              <button
                onClick={goToCourseDetails}
                className="py-3 px-9 text-lg rounded-md border border-ourOrange hover:text-[#ffffffca] transition w-[50%]"
              >
                {navigateAfterDelay ? (
                  <FontAwesomeIcon
                    className="animate-[spin_1.2s_infinite_linear]"
                    icon={faSpinner}
                  />
                ) : (
                  "Details"
                )}
              </button>
              <button
                onClick={goToPlayCourse}
                className="py-3 px-9 text-lg rounded-md bg-ourOrange hover:bg-[#efaf3a] transition w-[50%]"
              >
                Enroll
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Course;
