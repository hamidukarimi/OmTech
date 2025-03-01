import BackNav from "../backNav/BackNav";
import Course2 from "../course/Course2";
import { posters, members, students } from "@/assets/images";
import Footer from "../footer/Footer";

const SuggestedCourses = () => {
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

      playVideos: {
        nextV_image_1:
          "https://i.pinimg.com/236x/c2/f7/7e/c2f77efb45b24fbb962168efcb5d978b.jpg",
        nextV_video_1: "./upskill.mp4",
        nextV_title_1: "Lorem ispum doler set amet",
        nextV_views_1: 640,
        nextV_duration_1: "23:00",

        nextV_image_2:
          "https://i.pinimg.com/236x/77/bd/a0/77bda08ae60ab3d149d4a3240ebfe909.jpg",
        nextV_video_2: "./ed-vid.mp4",
        nextV_title_2: "Lorem ispum doler set amet lorem ispum",
        nextV_views_2: 418,
        nextV_duration_2: "18:20",

        nextV_image_3:
          "https://i.pinimg.com/236x/d3/cb/a9/d3cba9fd654118ba4fbeb65b8185a3f2.jpg",
        nextV_video_3: "./vid-4.mp4",
        nextV_title_3: "Lorem ispum doler set amet sign",
        nextV_views_3: 316,
        nextV_duration_3: "18:00",

        nextV_image_4:
          "https://i.pinimg.com/736x/44/7e/d8/447ed81c533368eae199f110c53526e7.jpg",
        nextV_video_4: "./vid-1.mp4",
        nextV_title_4: "Lorem ispum doler set amet sign is lorem ket",
        nextV_views_4: 532,
        nextV_duration_4: "30:00",
      },
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

      playVideos: {
        nextV_image_1:
          "https://i.pinimg.com/236x/c2/f7/7e/c2f77efb45b24fbb962168efcb5d978b.jpg",
        nextV_video_1: "./upskill.mp4",
        nextV_title_1: "Lorem ispum doler set amet",
        nextV_views_1: 640,
        nextV_duration_1: "23:00",

        nextV_image_2:
          "https://i.pinimg.com/236x/77/bd/a0/77bda08ae60ab3d149d4a3240ebfe909.jpg",
        nextV_video_2: "./ed-vid.mp4",
        nextV_title_2: "Lorem ispum doler set amet lorem ispum",
        nextV_views_2: 418,
        nextV_duration_2: "18:20",

        nextV_image_3:
          "https://i.pinimg.com/236x/d3/cb/a9/d3cba9fd654118ba4fbeb65b8185a3f2.jpg",
        nextV_video_3: "./vid-4.mp4",
        nextV_title_3: "Lorem ispum doler set amet sign",
        nextV_views_3: 316,
        nextV_duration_3: "18:00",

        nextV_image_4:
          "https://i.pinimg.com/736x/44/7e/d8/447ed81c533368eae199f110c53526e7.jpg",
        nextV_video_4: "./vid-1.mp4",
        nextV_title_4: "Lorem ispum doler set amet sign is lorem ket",
        nextV_views_4: 532,
        nextV_duration_4: "30:00",
      },
    },

    {
      id: 0,
      image:
        "https://i.pinimg.com/236x/8b/33/79/8b337967a987f068e43f705aef7e7397.jpg",
      type: "DEVELOPMENT",
      price: "$50",
      title: "Full-Stack Development",
      lessons: "28",
      description:
        "In this full-stack development course, you'll master both front-end and back-end technologies over 28 comprehensive lessons. Covering essential topics from HTML/CSS and JavaScript to server-side scripting and database management, you'll gain practical skills to build dynamic web applications.",
      time_span: "3 weeks",
      lectures: "7 Lessons",
      video_lessons: "10 hours",
      members: "715",
      bg_image:
        "https://i.pinimg.com/474x/ca/d9/4d/cad94d6b730143f7f7121b4dca4db64f.jpg",
      teacher_image:
        "https://i.pinimg.com/236x/b9/c5/2c/b9c52ca45be6fe69008466f749622afe.jpg",
      teacher_name: "Sarah Smith",
      teacher_position: "Full-Stack Developer",
      about_course:
        "In this course, you'll explore the fundamentals of full-stack development, from front-end design to back-end logic, building dynamic and interactive web applications.",
      views: 3200,
      duration: "30:00",
      playVideos: {
        nextV_image_1:
          "https://i.pinimg.com/236x/c2/f7/7e/c2f77efb45b24fbb962168efcb5d978b.jpg",
        nextV_video_1: "./upskill.mp4",
        nextV_title_1: "Lorem ispum doler set amet",
        nextV_views_1: 640,
        nextV_duration_1: "23:00",

        nextV_image_2:
          "https://i.pinimg.com/236x/77/bd/a0/77bda08ae60ab3d149d4a3240ebfe909.jpg",
        nextV_video_2: "./ed-vid.mp4",
        nextV_title_2: "Lorem ispum doler set amet lorem ispum",
        nextV_views_2: 418,
        nextV_duration_2: "18:20",

        nextV_image_3:
          "https://i.pinimg.com/236x/d3/cb/a9/d3cba9fd654118ba4fbeb65b8185a3f2.jpg",
        nextV_video_3: "./vid-4.mp4",
        nextV_title_3: "Lorem ispum doler set amet sign",
        nextV_views_3: 316,
        nextV_duration_3: "18:00",

        nextV_image_4:
          "https://i.pinimg.com/736x/44/7e/d8/447ed81c533368eae199f110c53526e7.jpg",
        nextV_video_4: "./vid-1.mp4",
        nextV_title_4: "Lorem ispum doler set amet sign is lorem ket",
        nextV_views_4: 532,
        nextV_duration_4: "30:00",
      },
    },
  ];
  return (
    <>
      <BackNav pageName="Suggested Courses" />
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

      <Footer />
    </>
  );
};

export default SuggestedCourses;
