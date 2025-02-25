import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

let Footer = () => {
  return (
    <>
      <div className="w-full   bg-darkGray px-5 pt-14">
        <p className="font-bold text-[27px] text-ourOrange">OmTech</p>
        <p className="mt-5 text-gray-200">
          Lorem ispum doler sit amet kia retimi something Lorem ispum doler sit{" "}
        </p>

        <div className="flex justify-between w-36 text-xl   mt-9 mb-12">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>

        <div className="grid grid-cols-2 gap-y-10 mb-9">
          <div>
            <p className="text-2xl font-bold mb-4 ">About</p>
            <div className="text-lg leading-8">
              <p>About us</p>
              <p>Our Mission</p>
              <p>Team Members</p>
              <p>Careers</p>
            </div>
          </div>

          <div>
            <p className="text-2xl font-bold mb-4 ">Courses</p>
            <div className="text-lg leading-8">
              <p>About us</p>
              <p>Our Mission</p>
              <p>Team Members</p>
              <p>Careers</p>
            </div>
          </div>

          <div>
            <p className="text-2xl font-bold mb-4 ">About</p>
            <div className="text-lg leading-8">
              <p>About us</p>
              <p>Our Mission</p>
              <p>Team Members</p>
              <p>Careers</p>
            </div>
          </div>

          <div>
            <p className="text-2xl font-bold mb-4 ">Courses</p>
            <div className="text-lg leading-8">
              <p>About us</p>
              <p>Our Mission</p>
              <p>Team Members</p>
              <p>Careers</p>
            </div>
          </div>
        </div>

        <hr />
        <br />
        <p className="text-center font-bold  ">copyright 2024 OmTech</p>
        <br />
      </div>
    </>
  );
};

export default Footer;
