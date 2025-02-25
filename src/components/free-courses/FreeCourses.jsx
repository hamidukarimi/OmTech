import BackNav from "../backNav/BackNav";
import Course2 from "../course/Course2";
import Header from "../header/Header";

import { posters, members, students } from "@/assets/images";

const FreeCourses = () => {
  const courses = [
    {
      id: 0,
      image: posters.graphicDesign,
      type: "DESIGNING",
      price: "Free",
      title: "Figma full totorial",
      lessons: "14",
      description:
        "Discover the your designing skills in figma, from SEO and content creation to social media strategy and email campaigns. Learn how to analyze audience behavior, optimize campaigns, and increase engagement using cutting-edge tools and techniques.",
      time_span: "1 weeks",
      lectures: "14 Lessons",
      video_lessons: "12 hours",
      members: "1780",
      bg_image: posters.graphicDesign,
      teacher_image: students.std3,
      teacher_name: "Said Shah Ahmadi",
      teacher_position: "Front-End Developer / UX/UI Designer",
      about_course:
        "This comprehensive course covers everything from search engine optimization to paid advertising campaigns. By the end, you’ll be equipped to craft effective marketing strategies that drive traffic, generate leads, and grow businesses in a digital-first world.",
      views: 12355,
      duration: "44:00",
      rates: "4.36",
    },
    {
        id: 1,
        image: posters.react,
        type: "DEVELOPMENT",
        price: "Free",
        title: "React Js totorial",
        lessons: "28",
        description:
          "Discover your Front-End skills with React Js, the most powerfull JavaScrpt Liberary from SEO and content creation to social media strategy and email campaigns. Learn how to analyze audience behavior, optimize campaigns, and increase engagement using cutting-edge tools and techniques.",
        time_span: "3 weeks",
        lectures: "28 Lessons",
        video_lessons: "12 hours",
        members: "4380",
        bg_image: posters.react,
        teacher_image: members.hamid,
        teacher_name: "Hamid Karimi",
        teacher_position: "React Developer",
        about_course:
          "This comprehensive course covers everything from search engine optimization to paid advertising campaigns. By the end, you’ll be equipped to craft effective marketing strategies that drive traffic, generate leads, and grow businesses in a digital-first world.",
        views: 26355,
        duration: "48:00",
        rates: "5.53",
      },
  ];

  return (
    <>
      <BackNav pageName="Free Courses" />
      <div className="px-5 py-14">
        {courses.map((course) => (
          <Course2
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
            rates={course.rates}
          />
        ))}
      </div>
    </>
  );
};

export default FreeCourses;
