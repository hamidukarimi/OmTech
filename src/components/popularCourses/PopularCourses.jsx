import React, { useState, useEffect } from "react";

import Course from "../course/Course";
import { posters, students, members } from "@/assets/images";

let PopularCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: 0,
      image: posters.fullStack,
      type: "DEVELOPMENT",
      price: "$50",
      title: "Full-Stack Development",
      lessons: "28",
      description:
        "Lorem ispum doler sit amet Lorem ispum doler sit amet. Lorem ispum doler sit amet Lorem ispum doler sit amet. Lorem ispum doler sit amet Lorem ispum doler sit amet. Lorem ispum doler sit amet Lorem ispum doler sit amet. Lorem ispum doler sit amet Lorem ispum doler sit amet.",
      time_span: "3 weeks",
      lectures: "7 Lessons",
      video_lessons: "10 hours",
      members: "715",
      bg_image: posters.fullStack,
      teacher_image: students.std2,
      teacher_name: "James Smith",
      teacher_position: "Front-End Developer",
      about_course:
        "In this tutorial, we will learn the basics of Photoshop, including layers, tools, filters, and adjustments.",
      views: 3200,
      duration: "30:00",

      playVideos: {
        nextV_image_1: students.std1,
        nextV_video_1: "./upskill.mp4",
        nextV_title_1: "Lorem ispum doler set amet",
        nextV_views_1: 640,
        nextV_duration_1: "23:00",

        nextV_image_2: students.std2,
        nextV_video_2: "./ed-vid.mp4",
        nextV_title_2: "Lorem ispum doler set amet lorem ispum",
        nextV_views_2: 418,
        nextV_duration_2: "18:20",

        nextV_image_3: students.std3,
        nextV_video_3: "./vid-4.mp4",
        nextV_title_3: "Lorem ispum doler set amet sign",
        nextV_views_3: 316,
        nextV_duration_3: "18:00",

        nextV_image_4: students.std1,
        nextV_video_4: "./vid-1.mp4",
        nextV_title_4: "Lorem ispum doler set amet sign is lorem ket",
        nextV_views_4: 532,
        nextV_duration_4: "30:00",
      },
    },
    {
      id: 1,
      image: posters.uxuiDesign,
      type: "DESIGN",
      price: "$45",
      title: "UI/UX Design",
      lessons: "25",
      description:
        "Learn to create user-friendly designs with a deep dive into user experience principles, design tools, wireframing, prototyping, and testing methodologies. Understand how design decisions impact user behavior and craft seamless interfaces that solve real-world problems.",
      time_span: "4 weeks",
      lectures: "10 Lessons",
      video_lessons: "15 hours",
      members: "540",
      bg_image: posters.uxuiDesign,
      teacher_image: students.std3,
      teacher_name: "Sarah Johnson",
      teacher_position: "UI/UX Designer",
      about_course:
        "This course provides an in-depth journey into user interface and user experience design. We'll explore modern tools, trends, and methodologies to create interfaces that are both aesthetically pleasing and highly functional, helping you become a proficient designer.",
      views: 4100,
      duration: "40:00",
    },
    {
      id: 2,
      image: posters.dataScincePython,
      type: "DATA SCIENCE",
      price: "$60",
      title: "Data Science with Python",
      lessons: "20",
      description:
        "Master data analysis and visualization with Python. Dive into real-world datasets to learn how to manipulate, clean, and process data for actionable insights. Topics include NumPy, Pandas, Matplotlib, and machine learning with Scikit-learn.",
      time_span: "5 weeks",
      lectures: "12 Lessons",
      video_lessons: "20 hours",
      members: "1020",
      bg_image: posters.dataScincePython,
      teacher_image: students.std2,
      teacher_name: "Michael Brown",
      teacher_position: "Data Scientist",
      about_course:
        "Data Science is a crucial skill in the modern age. In this course, we'll explore Python's libraries like Pandas and Matplotlib, dive into machine learning concepts, and work on practical projects to make you proficient in deriving insights from data.",
      views: 5200,
      duration: "50:00",
    },
    {
      id: 3,
      image: posters.digitalMarketing,
      type: "MARKETING",
      price: "$40",
      title: "Digital Marketing",
      lessons: "15",
      description:
        "Discover the art of digital marketing, from SEO and content creation to social media strategy and email campaigns. Learn how to analyze audience behavior, optimize campaigns, and increase engagement using cutting-edge tools and techniques.",
      time_span: "6 weeks",
      lectures: "8 Lessons",
      video_lessons: "12 hours",
      members: "880",
      bg_image: posters.digitalMarketing,
      teacher_image: students.std1,
      teacher_name: "Emily Davis",
      teacher_position: "Marketing Specialist",
      about_course:
        "This comprehensive course covers everything from search engine optimization to paid advertising campaigns. By the end, you’ll be equipped to craft effective marketing strategies that drive traffic, generate leads, and grow businesses in a digital-first world.",
      views: 4700,
      duration: "35:00",
    },
  ]);

  //for toggle add and remove from bookmarks page

  const [bookmarks, setBookmarks] = useState([]);

  // Initialize bookmarks from localStorage
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
  }, []);

  // Toggle bookmark: add if not present, remove if already bookmarked.
  const handleToggleFavorite = (card) => {
    const isBookmarked = bookmarks.some((book) => book.id === card.id);

    let updatedBookmarks;
    if (isBookmarked) {
      // Remove card if it exists in bookmarks
      updatedBookmarks = bookmarks.filter((book) => book.id !== card.id);
    } else {
      // Add card if it's not already bookmarked
      updatedBookmarks = [...bookmarks, card];
    }
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  //everything about bookmarks finished here

  return (
    <>
      <div className=" -mt-3  px-5 font-bold">
        <p className="text-2xl text-center">Our most popular courses</p>
        <br />
        <br />
        <br />
        {courses.map((course) => (
          <Course
            key={course.id}
            image={course.image}
            type={course.type}
            price={course.price}
            title={course.title}
            lessons={course.lessons}
            description={course.description}
            time_span={course.time_span}
            lectures={course.lectures}
            video_lessons={course.video_lessons}
            members={course.members}
            bg_image={course.bg_image}
            teacher_image={course.teacher_image}
            teacher_name={course.teacher_name}
            teacher_position={course.teacher_position}
            about_course={course.about_course}
            views={course.views}
            duration={course.duration}
            handleBookmark={() => handleToggleFavorite(course)}
            nextV_image_1={course?.playVideos?.nextV_image_1}
            nextV_video_1={course?.playVideos?.nextV_video_1}
            nextV_title_1={course?.playVideos?.nextV_title_1}
            nextV_views_1={course?.playVideos?.nextV_views_1}
            nextV_duration_1={course?.playVideos?.nextV_duration_1}
            nextV_image_2={course?.playVideos?.nextV_image_2}
            nextV_video_2={course?.playVideos?.nextV_video_2}
            nextV_title_2={course?.playVideos?.nextV_title_2}
            nextV_views_2={course?.playVideos?.nextV_views_2}
            nextV_duration_2={course?.playVideos?.nextV_duration_2}
            nextV_image_3={course?.playVideos?.nextV_image_3}
            nextV_video_3={course?.playVideos?.nextV_video_3}
            nextV_title_3={course?.playVideos?.nextV_title_3}
            nextV_views_3={course?.playVideos?.nextV_views_3}
            nextV_duration_3={course?.playVideos?.nextV_duration_3}
            nextV_image_4={course?.playVideos?.nextV_image_4}
            nextV_video_4={course?.playVideos?.nextV_video_4}
            nextV_title_4={course?.playVideos?.nextV_title_4}
            nextV_views_4={course?.playVideos?.nextV_views_4}
            nextV_duration_4={course?.playVideos?.nextV_duration_4}
          />
        ))}
      </div>
    </>
  );
};

export default PopularCourses;
