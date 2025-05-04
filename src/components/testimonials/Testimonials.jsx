import { Link, NavLink, useNavigate } from "react-router-dom";
import TestimonialCard from "./TestimonialCard";


let Testimonials = () => {
  return (
    <div className="px-5 md:px-10 xl:px-52">
      <p className="text-3xl md:text-3xl xl:text-4xl text-center">What Our Students Say?</p>
      <p className="text-2xl text-center mt-6">
        Lorem ispum doler amet sitis somethingdiffrent kia meri{" "}
      </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 xl:gap-7">
      <TestimonialCard
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
        image="https://i.pinimg.com/236x/c6/0b/ec/c60bec168e19a2c9881bfc2806766fc7.jpg"
        name="Emma Carter"
        position="Front-End Developer"
      />
      <TestimonialCard
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
        image="https://i.pinimg.com/236x/16/32/55/1632554a2d56114c2513492486171066.jpg"
        name="Maria Hassa"
        position="Graphic Designer"
      />
      <TestimonialCard
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
        image="https://i.pinimg.com/236x/9f/b3/f3/9fb3f3e99221c84726335d003813e1e9.jpg"
        name="John Beast"
        position="UX/UI Designer"
      />

</div>

      <Link to="/About"><p className="text-center text-xl mt-12">See More</p></Link>
    </div>
  );
};

export default Testimonials;
