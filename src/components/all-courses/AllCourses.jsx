import React, { useState, useEffect } from "react";

import { icons, posters, students, } from "@/assets/images";
import Header from "../header/Header";
import Course from "../course/Course";



const AllCourses = () => {
    const [courses, setCourses] = useState([
        [
            {
              id: 0,
              image: "https://www.pinterest.com/pin/fullstack_dev_001/",
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
              bg_image: "https://www.pinterest.com/pin/fullstack_dev_001_bg/",
              teacher_image: "https://www.pinterest.com/pin/teacher_james_smith/",
              teacher_name: "James Smith",
              teacher_position: "Front-End Developer",
              about_course:
                "In this tutorial, we will learn the basics of Photoshop, including layers, tools, filters, and adjustments.",
              views: 3200,
              duration: "30:00",
              playVideos: {
                nextV_image_1: "https://www.pinterest.com/pin/vid_fullstack_1/",
                nextV_video_1: "./upskill.mp4",
                nextV_title_1: "Lorem ispum doler set amet",
                nextV_views_1: 640,
                nextV_duration_1: "23:00",
          
                nextV_image_2: "https://www.pinterest.com/pin/vid_fullstack_2/",
                nextV_video_2: "./ed-vid.mp4",
                nextV_title_2: "Lorem ispum doler set amet lorem ispum",
                nextV_views_2: 418,
                nextV_duration_2: "18:20",
          
                nextV_image_3: "https://www.pinterest.com/pin/vid_fullstack_3/",
                nextV_video_3: "./vid-4.mp4",
                nextV_title_3: "Lorem ispum doler set amet sign",
                nextV_views_3: 316,
                nextV_duration_3: "18:00",
          
                nextV_image_4: "https://www.pinterest.com/pin/vid_fullstack_4/",
                nextV_video_4: "./vid-1.mp4",
                nextV_title_4: "Lorem ispum doler set amet sign is lorem ket",
                nextV_views_4: 532,
                nextV_duration_4: "30:00"
              }
            },
            {
              id: 1,
              image: "https://www.pinterest.com/pin/1234567891/",
              type: "DATA SCIENCE",
              price: "$70",
              title: "Data Science Bootcamp",
              lessons: "32",
              description:
                "Dive into data analysis, statistics, and machine learning with this comprehensive bootcamp. Learn Python, R, and data visualization.",
              time_span: "4 weeks",
              lectures: "8 Lessons",
              video_lessons: "12 hours",
              members: "820",
              bg_image: "https://www.pinterest.com/pin/1234567891_bg/",
              teacher_image: "https://www.pinterest.com/pin/teacher_alice_johnson/",
              teacher_name: "Alice Johnson",
              teacher_position: "Data Analyst",
              about_course:
                "This course covers data wrangling, visualization, and predictive analytics, equipping you with essential skills for a data-driven career.",
              views: 4100,
              duration: "45:00",
              playVideos: {
                nextV_image_1: "https://www.pinterest.com/pin/vid1_img1/",
                nextV_video_1: "./data1.mp4",
                nextV_title_1: "Introduction to Data Science",
                nextV_views_1: 520,
                nextV_duration_1: "20:00",
          
                nextV_image_2: "https://www.pinterest.com/pin/vid1_img2/",
                nextV_video_2: "./data2.mp4",
                nextV_title_2: "Data Cleaning Techniques",
                nextV_views_2: 430,
                nextV_duration_2: "25:00",
          
                nextV_image_3: "https://www.pinterest.com/pin/vid1_img3/",
                nextV_video_3: "./data3.mp4",
                nextV_title_3: "Exploratory Data Analysis",
                nextV_views_3: 310,
                nextV_duration_3: "18:30",
          
                nextV_image_4: "https://www.pinterest.com/pin/vid1_img4/",
                nextV_video_4: "./data4.mp4",
                nextV_title_4: "Introduction to Machine Learning",
                nextV_views_4: 480,
                nextV_duration_4: "22:15"
              }
            },
            {
              id: 2,
              image: "https://www.pinterest.com/pin/2234567892/",
              type: "DESIGN",
              price: "$60",
              title: "UI/UX Design Fundamentals",
              lessons: "24",
              description:
                "Learn the principles of user interface and user experience design, including wireframing, prototyping, and user testing.",
              time_span: "3 weeks",
              lectures: "6 Lessons",
              video_lessons: "8 hours",
              members: "650",
              bg_image: "https://www.pinterest.com/pin/2234567892_bg/",
              teacher_image: "https://www.pinterest.com/pin/teacher_bob_martin/",
              teacher_name: "Bob Martin",
              teacher_position: "UI/UX Designer",
              about_course:
                "Explore design thinking and practical design tools to create engaging and intuitive user experiences.",
              views: 3500,
              duration: "40:00",
              playVideos: {
                nextV_image_1: "https://www.pinterest.com/pin/vid2_img1/",
                nextV_video_1: "./design1.mp4",
                nextV_title_1: "Basics of Wireframing",
                nextV_views_1: 400,
                nextV_duration_1: "15:00",
          
                nextV_image_2: "https://www.pinterest.com/pin/vid2_img2/",
                nextV_video_2: "./design2.mp4",
                nextV_title_2: "Prototyping Techniques",
                nextV_views_2: 380,
                nextV_duration_2: "17:30",
          
                nextV_image_3: "https://www.pinterest.com/pin/vid2_img3/",
                nextV_video_3: "./design3.mp4",
                nextV_title_3: "User Testing Methods",
                nextV_views_3: 350,
                nextV_duration_3: "16:00",
          
                nextV_image_4: "https://www.pinterest.com/pin/vid2_img4/",
                nextV_video_4: "./design4.mp4",
                nextV_title_4: "Design Tools Overview",
                nextV_views_4: 420,
                nextV_duration_4: "18:45"
              }
            },
            {
              id: 3,
              image: "https://www.pinterest.com/pin/3234567893/",
              type: "DEVELOPMENT",
              price: "$80",
              title: "Mobile App Development",
              lessons: "30",
              description:
                "Master the art of mobile app development for Android and iOS using modern frameworks and best practices.",
              time_span: "5 weeks",
              lectures: "9 Lessons",
              video_lessons: "15 hours",
              members: "970",
              bg_image: "https://www.pinterest.com/pin/3234567893_bg/",
              teacher_image: "https://www.pinterest.com/pin/teacher_charlie_davis/",
              teacher_name: "Charlie Davis",
              teacher_position: "Mobile Developer",
              about_course:
                "Gain hands-on experience building responsive and robust mobile applications with cross-platform tools.",
              views: 5000,
              duration: "55:00",
              playVideos: {
                nextV_image_1: "https://www.pinterest.com/pin/vid3_img1/",
                nextV_video_1: "./mobile1.mp4",
                nextV_title_1: "Setting Up Development Environment",
                nextV_views_1: 600,
                nextV_duration_1: "22:00",
          
                nextV_image_2: "https://www.pinterest.com/pin/vid3_img2/",
                nextV_video_2: "./mobile2.mp4",
                nextV_title_2: "Building User Interfaces",
                nextV_views_2: 550,
                nextV_duration_2: "24:00",
          
                nextV_image_3: "https://www.pinterest.com/pin/vid3_img3/",
                nextV_video_3: "./mobile3.mp4",
                nextV_title_3: "Integrating APIs",
                nextV_views_3: 530,
                nextV_duration_3: "20:30",
          
                nextV_image_4: "https://www.pinterest.com/pin/vid3_img4/",
                nextV_video_4: "./mobile4.mp4",
                nextV_title_4: "Publishing Your App",
                nextV_views_4: 580,
                nextV_duration_4: "23:15"
              }
            },
            {
              id: 4,
              image: "https://www.pinterest.com/pin/4234567894/",
              type: "MARKETING",
              price: "$55",
              title: "Digital Marketing Essentials",
              lessons: "20",
              description:
                "Learn SEO, social media marketing, content strategy, and more to boost your digital presence.",
              time_span: "4 weeks",
              lectures: "5 Lessons",
              video_lessons: "9 hours",
              members: "730",
              bg_image: "https://www.pinterest.com/pin/4234567894_bg/",
              teacher_image: "https://www.pinterest.com/pin/teacher_diana_evans/",
              teacher_name: "Diana Evans",
              teacher_position: "Digital Marketer",
              about_course:
                "Understand the core principles of digital marketing and implement effective strategies for online growth.",
              views: 3900,
              duration: "42:00",
              playVideos: {
                nextV_image_1: "https://www.pinterest.com/pin/vid4_img1/",
                nextV_video_1: "./marketing1.mp4",
                nextV_title_1: "SEO Fundamentals",
                nextV_views_1: 450,
                nextV_duration_1: "18:00",
          
                nextV_image_2: "https://www.pinterest.com/pin/vid4_img2/",
                nextV_video_2: "./marketing2.mp4",
                nextV_title_2: "Social Media Strategies",
                nextV_views_2: 470,
                nextV_duration_2: "20:00",
          
                nextV_image_3: "https://www.pinterest.com/pin/vid4_img3/",
                nextV_video_3: "./marketing3.mp4",
                nextV_title_3: "Content Marketing Tips",
                nextV_views_3: 420,
                nextV_duration_3: "19:30",
          
                nextV_image_4: "https://www.pinterest.com/pin/vid4_img4/",
                nextV_video_4: "./marketing4.mp4",
                nextV_title_4: "Analytics and Metrics",
                nextV_views_4: 460,
                nextV_duration_4: "21:00"
              }
            },
            {
              id: 5,
              image: "https://www.pinterest.com/pin/5234567895/",
              type: "AI & ML",
              price: "$90",
              title: "Machine Learning A-Z",
              lessons: "35",
              description:
                "Explore the fundamentals and advanced techniques of machine learning with practical examples and projects.",
              time_span: "6 weeks",
              lectures: "10 Lessons",
              video_lessons: "18 hours",
              members: "1050",
              bg_image: "https://www.pinterest.com/pin/5234567895_bg/",
              teacher_image: "https://www.pinterest.com/pin/teacher_elaine_thompson/",
              teacher_name: "Elaine Thompson",
              teacher_position: "Machine Learning Engineer",
              about_course:
                "Cover regression, classification, clustering, and deep learning through hands-on projects and real-world scenarios.",
              views: 6200,
              duration: "60:00",
              playVideos: {
                nextV_image_1: "https://www.pinterest.com/pin/vid5_img1/",
                nextV_video_1: "./ml1.mp4",
                nextV_title_1: "Introduction to ML",
                nextV_views_1: 700,
                nextV_duration_1: "25:00",
          
                nextV_image_2: "https://www.pinterest.com/pin/vid5_img2/",
                nextV_video_2: "./ml2.mp4",
                nextV_title_2: "Supervised Learning",
                nextV_views_2: 680,
                nextV_duration_2: "27:00",
          
                nextV_image_3: "https://www.pinterest.com/pin/vid5_img3/",
                nextV_video_3: "./ml3.mp4",
                nextV_title_3: "Unsupervised Learning",
                nextV_views_3: 650,
                nextV_duration_3: "26:30",
          
                nextV_image_4: "https://www.pinterest.com/pin/vid5_img4/",
                nextV_video_4: "./ml4.mp4",
                nextV_title_4: "Deep Learning Overview",
                nextV_views_4: 720,
                nextV_duration_4: "28:15"
              }
            },
            {
              id: 6,
              image: "https://www.pinterest.com/pin/6234567896/",
              type: "SECURITY",
              price: "$65",
              title: "Cybersecurity for Beginners",
              lessons: "22",
              description:
                "Learn about cybersecurity fundamentals, network security, and how to protect systems against cyber threats.",
              time_span: "4 weeks",
              lectures: "7 Lessons",
              video_lessons: "10 hours",
              members: "810",
              bg_image: "https://www.pinterest.com/pin/6234567896_bg/",
              teacher_image: "https://www.pinterest.com/pin/teacher_franklin_reed/",
              teacher_name: "Franklin Reed",
              teacher_position: "Cybersecurity Specialist",
              about_course:
                "This course provides an introduction to cybersecurity principles and practical measures to secure digital assets.",
              views: 4700,
              duration: "38:00",
              playVideos: {
                nextV_image_1: "https://www.pinterest.com/pin/vid6_img1/",
                nextV_video_1: "./cyber1.mp4",
                nextV_title_1: "Cybersecurity Basics",
                nextV_views_1: 480,
                nextV_duration_1: "19:00",
          
                nextV_image_2: "https://www.pinterest.com/pin/vid6_img2/",
                nextV_video_2: "./cyber2.mp4",
                nextV_title_2: "Network Security Fundamentals",
                nextV_views_2: 460,
                nextV_duration_2: "20:15",
          
                nextV_image_3: "https://www.pinterest.com/pin/vid6_img3/",
                nextV_video_3: "./cyber3.mp4",
                nextV_title_3: "Ethical Hacking Introduction",
                nextV_views_3: 450,
                nextV_duration_3: "18:45",
          
                nextV_image_4: "https://www.pinterest.com/pin/vid6_img4/",
                nextV_video_4: "./cyber4.mp4",
                nextV_title_4: "Protecting Your Data",
                nextV_views_4: 490,
                nextV_duration_4: "20:00"
              }
            },
            {
              id: 7,
              image: "https://www.pinterest.com/pin/7234567897/",
              type: "CLOUD",
              price: "$75",
              title: "Cloud Computing Mastery",
              lessons: "28",
              description:
                "Understand cloud infrastructure, services, and deployment models to build scalable cloud applications.",
              time_span: "5 weeks",
              lectures: "8 Lessons",
              video_lessons: "14 hours",
              members: "920",
              bg_image: "https://www.pinterest.com/pin/7234567897_bg/",
              teacher_image: "https://www.pinterest.com/pin/teacher_george_miller/",
              teacher_name: "George Miller",
              teacher_position: "Cloud Architect",
              about_course:
                "Learn about AWS, Azure, and Google Cloud through practical labs and real-world examples.",
              views: 5400,
              duration: "50:00",
              playVideos: {
                nextV_image_1: "https://www.pinterest.com/pin/vid7_img1/",
                nextV_video_1: "./cloud1.mp4",
                nextV_title_1: "Introduction to Cloud Computing",
                nextV_views_1: 510,
                nextV_duration_1: "21:00",
          
                nextV_image_2: "https://www.pinterest.com/pin/vid7_img2/",
                nextV_video_2: "./cloud2.mp4",
                nextV_title_2: "Understanding IaaS & PaaS",
                nextV_views_2: 500,
                nextV_duration_2: "22:30",
          
                nextV_image_3: "https://www.pinterest.com/pin/vid7_img3/",
                nextV_video_3: "./cloud3.mp4",
                nextV_title_3: "Deploying Cloud Solutions",
                nextV_views_3: 480,
                nextV_duration_3: "20:45",
          
                nextV_image_4: "https://www.pinterest.com/pin/vid7_img4/",
                nextV_video_4: "./cloud4.mp4",
                nextV_title_4: "Cloud Security Best Practices",
                nextV_views_4: 520,
                nextV_duration_4: "23:00"
              }
            },
            {
              id: 8,
              image: "https://www.pinterest.com/pin/8234567898/",
              type: "GAME DEVELOPMENT",
              price: "$85",
              title: "Game Development with Unity",
              lessons: "26",
              description:
                "Learn game development fundamentals using Unity, including game physics, animation, and scripting.",
              time_span: "5 weeks",
              lectures: "7 Lessons",
              video_lessons: "13 hours",
              members: "880",
              bg_image: "https://www.pinterest.com/pin/8234567898_bg/",
              teacher_image: "https://www.pinterest.com/pin/teacher_hannah_lee/",
              teacher_name: "Hannah Lee",
              teacher_position: "Game Developer",
              about_course:
                "Create immersive games by learning Unity's interface, C# scripting, and best practices in game design.",
              views: 4800,
              duration: "48:00",
              playVideos: {
                nextV_image_1: "https://www.pinterest.com/pin/vid8_img1/",
                nextV_video_1: "./unity1.mp4",
                nextV_title_1: "Unity Basics",
                nextV_views_1: 560,
                nextV_duration_1: "19:30",
          
                nextV_image_2: "https://www.pinterest.com/pin/vid8_img2/",
                nextV_video_2: "./unity2.mp4",
                nextV_title_2: "Game Physics",
                nextV_views_2: 540,
                nextV_duration_2: "20:00",
          
                nextV_image_3: "https://www.pinterest.com/pin/vid8_img3/",
                nextV_video_3: "./unity3.mp4",
                nextV_title_3: "Animation Techniques",
                nextV_views_3: 520,
                nextV_duration_3: "21:15",
          
                nextV_image_4: "https://www.pinterest.com/pin/vid8_img4/",
                nextV_video_4: "./unity4.mp4",
                nextV_title_4: "Scripting in C#",
                nextV_views_4: 550,
                nextV_duration_4: "22:00"
              }
            },
            {
              id: 9,
              image: "https://www.pinterest.com/pin/9234567899/",
              type: "BLOCKCHAIN",
              price: "$95",
              title: "Blockchain Basics",
              lessons: "18",
              description:
                "Understand the fundamentals of blockchain technology, smart contracts, and decentralized applications.",
              time_span: "3 weeks",
              lectures: "5 Lessons",
              video_lessons: "7 hours",
              members: "640",
              bg_image: "https://www.pinterest.com/pin/9234567899_bg/",
              teacher_image: "https://www.pinterest.com/pin/teacher_ian_roberts/",
              teacher_name: "Ian Roberts",
              teacher_position: "Blockchain Developer",
              about_course:
                "Get introduced to blockchain concepts, cryptocurrency, and building your first smart contract.",
              views: 3300,
              duration: "35:00",
              playVideos: {
                nextV_image_1: "https://www.pinterest.com/pin/vid9_img1/",
                nextV_video_1: "./blockchain1.mp4",
                nextV_title_1: "What is Blockchain?",
                nextV_views_1: 400,
                nextV_duration_1: "16:00",
          
                nextV_image_2: "https://www.pinterest.com/pin/vid9_img2/",
                nextV_video_2: "./blockchain2.mp4",
                nextV_title_2: "Smart Contracts 101",
                nextV_views_2: 380,
                nextV_duration_2: "15:30",
          
                nextV_image_3: "https://www.pinterest.com/pin/vid9_img3/",
                nextV_video_3: "./blockchain3.mp4",
                nextV_title_3: "Decentralized Applications",
                nextV_views_3: 360,
                nextV_duration_3: "14:45",
          
                nextV_image_4: "https://www.pinterest.com/pin/vid9_img4/",
                nextV_video_4: "./blockchain4.mp4",
                nextV_title_4: "Cryptocurrency Basics",
                nextV_views_4: 410,
                nextV_duration_4: "17:00"
              }
            },
            {
              id: 10,
              image: "https://www.pinterest.com/pin/10234567810/",
              type: "DESIGN",
              price: "$50",
              title: "Graphic Design for Beginners",
              lessons: "20",
              description:
                "Learn the basics of graphic design including typography, color theory, and layout principles.",
              time_span: "4 weeks",
              lectures: "6 Lessons",
              video_lessons: "9 hours",
              members: "710",
              bg_image: "https://www.pinterest.com/pin/10234567810_bg/",
              teacher_image: "https://www.pinterest.com/pin/teacher_julia_carter/",
              teacher_name: "Julia Carter",
              teacher_position: "Graphic Designer",
              about_course:
                "This course introduces design fundamentals and creative techniques for stunning visuals.",
              views: 3600,
              duration: "40:00",
              playVideos: {
                nextV_image_1: "https://www.pinterest.com/pin/vid10_img1/",
                nextV_video_1: "./graphic1.mp4",
                nextV_title_1: "Design Principles",
                nextV_views_1: 430,
                nextV_duration_1: "17:30",
          
                nextV_image_2: "https://www.pinterest.com/pin/vid10_img2/",
                nextV_video_2: "./graphic2.mp4",
                nextV_title_2: "Typography Basics",
                nextV_views_2: 410,
                nextV_duration_2: "16:00",
          
                nextV_image_3: "https://www.pinterest.com/pin/vid10_img3/",
                nextV_video_3: "./graphic3.mp4",
                nextV_title_3: "Color Theory",
                nextV_views_3: 390,
                nextV_duration_3: "15:45",
          
                nextV_image_4: "https://www.pinterest.com/pin/vid10_img4/",
                nextV_video_4: "./graphic4.mp4",
                nextV_title_4: "Layout and Composition",
                nextV_views_4: 420,
                nextV_duration_4: "18:00"
              }
            },
            {
              id: 11,
              image: "https://www.pinterest.com/pin/11234567811/",
              type: "MANAGEMENT",
              price: "$65",
              title: "Project Management Professional",
              lessons: "25",
              description:
                "Master project management techniques, methodologies, and tools to effectively lead projects.",
              time_span: "5 weeks",
              lectures: "7 Lessons",
              video_lessons: "11 hours",
              members: "780",
              bg_image: "https://www.pinterest.com/pin/11234567811_bg/",
              teacher_image: "https://www.pinterest.com/pin/teacher_kevin_brooks/",
              teacher_name: "Kevin Brooks",
              teacher_position: "Project Manager",
              about_course:
                "Learn agile, waterfall, and other project management frameworks through practical case studies.",
              views: 4100,
              duration: "44:00",
              playVideos: {
                nextV_image_1: "https://www.pinterest.com/pin/vid11_img1/",
                nextV_video_1: "./pm1.mp4",
                nextV_title_1: "Project Initiation",
                nextV_views_1: 450,
                nextV_duration_1: "18:00",
          
                nextV_image_2: "https://www.pinterest.com/pin/vid11_img2/",
                nextV_video_2: "./pm2.mp4",
                nextV_title_2: "Planning and Scheduling",
                nextV_views_2: 430,
                nextV_duration_2: "20:00",
          
                nextV_image_3: "https://www.pinterest.com/pin/vid11_img3/",
                nextV_video_3: "./pm3.mp4",
                nextV_title_3: "Risk Management",
                nextV_views_3: 410,
                nextV_duration_3: "19:30",
          
                nextV_image_4: "https://www.pinterest.com/pin/vid11_img4/",
                nextV_video_4: "./pm4.mp4",
                nextV_title_4: "Project Closure",
                nextV_views_4: 440,
                nextV_duration_4: "21:00"
              }
            },
            {
              id: 12,
              image: "https://www.pinterest.com/pin/12234567812/",
              type: "TESTING",
              price: "$55",
              title: "Software Testing and QA",
              lessons: "21",
              description:
                "Learn the principles of software testing, quality assurance methodologies, and automation testing tools.",
              time_span: "4 weeks",
              lectures: "6 Lessons",
              video_lessons: "10 hours",
              members: "690",
              bg_image: "https://www.pinterest.com/pin/12234567812_bg/",
              teacher_image: "https://www.pinterest.com/pin/teacher_lisa_nguyen/",
              teacher_name: "Lisa Nguyen",
              teacher_position: "QA Engineer",
              about_course:
                "This course covers manual and automated testing techniques to ensure high-quality software delivery.",
              views: 3700,
              duration: "39:00",
              playVideos: {
                nextV_image_1: "https://www.pinterest.com/pin/vid12_img1/",
                nextV_video_1: "./testing1.mp4",
                nextV_title_1: "Introduction to Software Testing",
                nextV_views_1: 420,
                nextV_duration_1: "16:30",
          
                nextV_image_2: "https://www.pinterest.com/pin/vid12_img2/",
                nextV_video_2: "./testing2.mp4",
                nextV_title_2: "Manual Testing Techniques",
                nextV_views_2: 400,
                nextV_duration_2: "17:00",
          
                nextV_image_3: "https://www.pinterest.com/pin/vid12_img3/",
                nextV_video_3: "./testing3.mp4",
                nextV_title_3: "Automation Testing Tools",
                nextV_views_3: 390,
                nextV_duration_3: "16:00",
          
                nextV_image_4: "https://www.pinterest.com/pin/vid12_img4/",
                nextV_video_4: "./testing4.mp4",
                nextV_title_4: "QA Best Practices",
                nextV_views_4: 410,
                nextV_duration_4: "18:00"
              }
            }
          ]
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
      <Header />
      <div className="px-5">
        <p className="text-2xl text-center mt-20 mb-3">
          Find your dream course here
        </p>

        <div className="relative my-10">
          <input
            className="w-full pl-5 pr-14 py-2 mt-5 rounded-[30px] text-white text-xl bg-bodyColor border border-ourOrange outline-none"
            placeholder="Search..."
          />
          <span className="absolute right-5 top-8 ">
            <img className="w-[27px] " src={icons.search2} />
          </span>
        </div>

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

export default AllCourses;
