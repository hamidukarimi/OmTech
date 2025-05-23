import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPlay } from "@fortawesome/free-solid-svg-icons";
import Course2 from "../course/Course2";
import Footer from "../footer/Footer";
import BackNav from "../backNav/BackNav";

import { posters } from "@/assets/images";

const PlayCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setPlayVideo(false);
      } else {
        videoRef.current.pause();
        setPlayVideo(true);
      }
    }
  };

  // about loading spinner starts
  const [imageLoaded, setImageLoaded] = useState(false);
  const isLoading = !imageLoaded;
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  // about loading spinner ends

  //------------  to get all data from where we navigate to this component
  const location = useLocation();
  const {
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
  } = location.state || {};

  // ----------- collect all data at a single array of object to use it any where needed
  const mediaData = [
    {
      id: 1,
      image: nextV_image_1,
      video: nextV_video_1,
      title: nextV_title_1,
      views: nextV_views_1,
      duration: nextV_duration_1,
    },
    {
      id: 2,
      image: nextV_image_2,
      video: nextV_video_2,
      title: nextV_title_2,
      views: nextV_views_2,
      duration: nextV_duration_2,
    },
    {
      id: 3,
      image: nextV_image_3,
      video: nextV_video_3,
      title: nextV_title_3,
      views: nextV_views_3,
      duration: nextV_duration_3,
    },
    {
      id: 4,
      image: nextV_image_4,
      video: nextV_video_4,
      title: nextV_title_4,
      views: nextV_views_4,
      duration: nextV_duration_4,
    },
  ];

  const [activeMedia, setActiveMedia] = useState(mediaData[0]);

  // -------- this is the current played video component
  let CurrentPlay = () => {
    return (
      <>
        <div className="font-bold text-xl ">
          <div className="w-full h-[280px]  overflow-hidden relative">

          {!imageLoaded && (
                  <div className="w-full h-full border-b bg-bodyColor   flex justify-center items-center">
                    <div className="spinner "></div>
                  </div>
                )}
                {/* Render the image but hide it until it's loaded */}
               
            <video
            onLoad={handleImageLoad}
            style={{ display: imageLoaded ? "block" : "none" }}
              poster={activeMedia.image}
              className="w-full h-full  object-cover"
              ref={videoRef}
              src={activeMedia.video}
              controls
            />

            <div
              onClick={togglePlayPause}
              className={`bg-ourOrange px-5 py-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full  ${
                playVideo ? "opacity-100" : "opacity-0 w-full h-full"
              }`}
              aria-hidden="true"
            >
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
          <div className="bg-bodyColor pt-3 pb-4">
            <p className="mb-1 ">{activeMedia.title}</p>
          </div>
          {/* <p>James Smith</p> */}
        </div>
      </>
    );
  };

  // --------- this is the old version of code to call the next video component that we chnaged from props to array of objects

  // let NextVideo = ({
  //   set_nextV_image,
  //   set_nextV_title,
  //   set_nextV_views,
  //   set_nextV_duration,
  // }) => {
  //   return (
  //     <div className="w-full h-[118px] flex rounded-md mb-4 border border-ourOrange ">
  //       <div className="w-[50%] h-full bg-darkGray">
  //         <img className="h-full w-full" src={set_nextV_image} />
  //       </div>
  //       <div className="p-2 w-[50%] flex flex-col justify-between">
  //         <p className="font-bold">{set_nextV_title}</p>
  //         <div className="mt-3 text-sm">
  //           <p>{set_nextV_views} views</p>
  //           <p>{set_nextV_duration} duration</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // ---------- this codes are for arrow down and up button at the end of the "next videos" to show more or less videos

  const [sectionOpen, setSectionOpen] = useState(false);

  const toggleSection = () => {
    if (sectionOpen === true) {
      setSectionOpen(false);
    } else {
      setSectionOpen(true);
    }
  };

  return (
    <div>
      <BackNav pageName="Enroll to course" />

      <div className="p-5">
        <div>
          <div className="sticky top-16 z-10 ">
            <CurrentPlay />
          </div>

          {mediaData.map((media) => (
            <div
              onClick={() => setActiveMedia(media)}
              key={media.id}
              className="w-full h-[118px] flex rounded-md overflow-hidden mb-4 border border-ourOrange "
            >
              <div className="w-[50%] h-full bg-darkGray">
                {!imageLoaded && (
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="spinner w-[30px] h-[30px] border-2"></div>
                  </div>
                )}
                {/* Render the image but hide it until it's loaded */}
                <img
                  onLoad={handleImageLoad}
                  style={{ display: imageLoaded ? "block" : "none" }}
                  className="h-full w-full"
                  src={media.image}
                />
              </div>
              <div className="p-2 w-[50%] flex flex-col justify-between">
                <p className="font-bold line-clamp-2">{media.title}</p>
                <div className="mt-3 text-sm">
                  <p>{media.views} views</p>
                  <p>{media.duration} duration</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="  my-6">
          {/* <NextVideo
            set_nextV_image={nextV_image_1}
            set_nextV_title={nextV_title_1}
            set_nextV_views={nextV_views_1}
            set_nextV_duration={nextV_duration_1}
          />
          <NextVideo
            set_nextV_image={nextV_image_2}
            set_nextV_title={nextV_title_2}
            set_nextV_views={nextV_views_2}
            set_nextV_duration={nextV_duration_2}
          />
          <NextVideo
            set_nextV_image={nextV_image_3}
            set_nextV_title={nextV_title_3}
            set_nextV_views={nextV_views_3}
            set_nextV_duration={nextV_duration_3}
          /> */}

          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              sectionOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          ></div>
        </div>

        <FontAwesomeIcon
          onClick={toggleSection}
          className={`ml-[50%] transform -translate-x-1/2 text-2xl mb-5 -mt-3 ${
            sectionOpen === true ? "-rotate-180" : ""
          }`}
          icon={faAngleDown}
        />
        <hr />

        {/* ------ the below section is all for the course information */}

        <div className="py-10">
          <div className="flex items-center gap-4">
            <img
              className="w-[65px] h-[65px] object-cover rounded-full"
              src={teacher_image}
            />
            <div>
              <p className="font-bold text-xl">{teacher_name}</p>
              <p className=" text-xl">{teacher_position}</p>
            </div>
          </div>

          <p className="font-bold text-lg my-6">{about_course}</p>

          <span className="flex gap-10">
            <p>
              <strong>{views}</strong> views
            </p>
            <p>
              <strong>{duration}</strong> duration
            </p>
          </span>
        </div>

        <div>
          <p className="text-2xl font-bold mb-7">Related Courses</p>
          <Course2
            image={posters.graphicDesign}
            type="DESIGN"
            price="$40"
            title="UX/UI Design"
            lessons="undefined"
            description="undefined"
            time_span="undefined"
            lectures="undefined"
            video_lessons="undefined"
            members="undefined"
            bg_image={posters.graphicDesign}
            teacher_image="undefined"
            teacher_name="undefined"
            teacher_position="undefined"
            about_course="undefined"
            views="undefined"
            duration="undefined"
            rates="undefined"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlayCourse;
