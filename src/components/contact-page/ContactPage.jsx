import { useState } from "react";
import Header from "../header/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Footer from "../footer/Footer";

const ContactPage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Header />

      <div className=" font-bold py-12 ">
        <p className="text-3xl px-5">Let's get in touch</p>

        <div className="w-[95%] rounded-[0_22px_22px_0] px-10 py-10 bg-darkGray mt-24 relative">
          <div className=" bg-darkGray w-[75px] h-[75px] text-[43px] flex justify-center text-ourOrange items-center rounded-lg shadow-md absolute -top-16 left-0">
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
          <div className=" bg-darkGray w-[50px] h-[50px] text-[30px] flex justify-center text-red-500 items-center rounded-lg shadow-md absolute -top-16 -right-6">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          

          <p className="text-[27px] mb-3">Send us a message!</p>
          <p>How can we help you today?</p>

          <div className="mt-7 relative">
            <label
              htmlFor="inputname"
              className="block text-ourOrange font-semibold text-sm"
            >
              Name
            </label>
            <div className="mt-2 mb-5">
              <input
                placeholder="Enter Your Name"
                type="text"
                name="inputname"
                id="inputname"
                className="block w-full rounded-md py-2.5 px-2 ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600  bg-[#2626264d]"
              />
            </div>

            <label
              htmlFor="inputname"
              className=" block text-ourOrange font-semibold text-sm"
            >
              Email
            </label>
            <div className="mt-2 mb-5">
              <input
                placeholder="Enter Your Email"
                type="email"
                name="inputname"
                id="inputname"
                className="block w-full rounded-md py-2.5 px-2 ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600  bg-[#2626264d]"
              />
            </div>

            <label
              htmlFor="inputname"
              className=" block text-ourOrange font-semibold text-sm"
            >
              Message
            </label>
            <div className="mt-2 ">
              <textarea
                placeholder="Enter Your Message"
                name="inputname"
                id="inputname"
                className="block w-full rounded-md py-2.5 px-2 ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 bg-[#2626264d]"
                rows={4} // Adjust rows here
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-8 absolute left-1/2 transform -translate-x-1/2  px-7 py-3 rounded-md bg-ourOrange hover:bg-[#efaf3a]"
            >
              Submit
            </button>
            <br />
            <br />
            <br />
          </div>
        </div>

        <div className="mx-6">
          <div className="mt-8 px-2  bg-darkGray w-full h-20 rounded-xl flex justify-around items-center">
           <FontAwesomeIcon className="text-3xl active:text-ourOrange" icon={faFacebook}/>
           <FontAwesomeIcon className="text-3xl active:text-ourOrange" icon={faInstagram}/>
           <FontAwesomeIcon className="text-3xl active:text-ourOrange" icon={faLinkedin}/>
           <FontAwesomeIcon className="text-3xl active:text-ourOrange" icon={faYoutube}/>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
