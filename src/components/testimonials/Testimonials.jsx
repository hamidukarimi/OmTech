import TestimonialCard from "./TestimonialCard";
import { students } from "@/assets/images";


let Testimonials = () => {
  return (
    <div className="px-5 ">
      <p className="text-3xl text-center">What Our Students Say?</p>
      <p className="text-2xl text-center mt-6">
        Lorem ispum doler amet sitis somethingdiffrent kia meri{" "}
      </p>

      <TestimonialCard
        message="lorem ispum doler asinfd d dfdsufy dsfuufy dfhdvu fhv fuh hvuahv vuhv cudchdhc dhdhduvhr uhcdhv"
        image={students.std1}
        name="Emma Carter"
        position="Front-End Developer"
      />
      <TestimonialCard
        message="lorem ispum doler asinfd d dfdsufy dsfuufy dfhdvu fhv fuh hvuahv vuhv cudchdhc dhdhduvhr uhcdhv"
        image={students.std2}
        name="Olivia Bennett"
        position="Graphic Designer"
      />
      <TestimonialCard
        message="lorem ispum doler asinfd d dfdsufy dsfuufy dfhdvu fhv fuh hvuahv vuhv cudchdhc dhdhduvhr uhcdhv"
        image={students.std3}
        name="Sophia Collins"
        position="UX/UI Designer"
      />
    </div>
  );
};

export default Testimonials;
