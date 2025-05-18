// import { useState, useEffect } from "react";
// import Header from "../header/Header";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlane, faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
// import Footer from "../footer/Footer";

// const ContactPage = () => {

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

  
//   const [isFocused, setIsFocused] = useState(false);
//   const [inputValue, setInputValue] = useState("");

//   return (
//     <div>
//       <Header />

//       <div className=" font-bold py-12 ">
//         <p className="text-3xl px-5">Let's get in touch</p>

//         <div className="w-[95%] rounded-[0_22px_22px_0] px-10 py-10 bg-darkGray mt-24 relative">
//           <div className=" bg-darkGray w-[75px] h-[75px] text-[43px] flex justify-center text-ourOrange items-center rounded-lg shadow-md absolute -top-16 left-0">
//             <FontAwesomeIcon icon={faPaperPlane} />
//           </div>
//           <div className=" bg-darkGray w-[50px] h-[50px] text-[30px] flex justify-center text-red-500 items-center rounded-lg shadow-md absolute -top-16 -right-6">
//             <FontAwesomeIcon icon={faLocationDot} />
//           </div>
          

//           <p className="text-[27px] mb-3">Send us a message!</p>
//           <p>How can we help you today?</p>

//           <div className="mt-7 relative">
//             <label
//               htmlFor="inputname"
//               className="block text-ourOrange font-semibold text-sm"
//             >
//               Name
//             </label>
//             <div className="mt-2 mb-5">
//               <input
//                 placeholder="Enter Your Name"
//                 type="text"
//                 name="inputname"
//                 id="inputname"
//                 className="block w-full rounded-md py-2.5 px-2 ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600  bg-[#2626264d]"
//               />
//             </div>

//             <label
//               htmlFor="inputname"
//               className=" block text-ourOrange font-semibold text-sm"
//             >
//               Email
//             </label>
//             <div className="mt-2 mb-5">
//               <input
//                 placeholder="Enter Your Email"
//                 type="email"
//                 name="inputname"
//                 id="inputname"
//                 className="block w-full rounded-md py-2.5 px-2 ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600  bg-[#2626264d]"
//               />
//             </div>

//             <label
//               htmlFor="inputname"
//               className=" block text-ourOrange font-semibold text-sm"
//             >
//               Message
//             </label>
//             <div className="mt-2 ">
//               <textarea
//                 placeholder="Enter Your Message"
//                 name="inputname"
//                 id="inputname"
//                 className="block w-full rounded-md py-2.5 px-2 ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 bg-[#2626264d]"
//                 rows={4} // Adjust rows here
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="mt-8 absolute left-1/2 transform -translate-x-1/2  px-7 py-3 rounded-md bg-ourOrange hover:bg-[#efaf3a]"
//             >
//               Submit
//             </button>
//             <br />
//             <br />
//             <br />
//           </div>
//         </div>

//         <div className="mx-6">
//           <div className="mt-8 px-2  bg-darkGray w-full h-20 rounded-xl flex justify-around items-center">
//            <FontAwesomeIcon className="text-3xl active:text-ourOrange" icon={faFacebook}/>
//            <FontAwesomeIcon className="text-3xl active:text-ourOrange" icon={faInstagram}/>
//            <FontAwesomeIcon className="text-3xl active:text-ourOrange" icon={faLinkedin}/>
//            <FontAwesomeIcon className="text-3xl active:text-ourOrange" icon={faYoutube}/>
//           </div>
//         </div>
//       </div>
      
//       <Footer />
//     </div>
//   );
// };

// export default ContactPage;








import React from 'react';
import { FaGithub, FaDiscord, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

import Header from "../header/Header";
import Footer from "../footer/Footer";


export default function ContactPage() {
  return (
   <>
     <Header />
   
    <div className="bg-bodyColor min-h-screen text-gray-100 ">
      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 2xl:py-32  grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold">Contact us</h2>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit amet diam in est pharetra porttitor libero netus nulla tempor consequat.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-100 hover:text-white"
            >
                <FaLinkedinIn size={20} />
             
              <span>Contribute on GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-100 hover:text-white"
            >
              <FaDiscord size={24} />
              <span>Join our community</span>
            </a>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-medium mb-3">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white">
                <FaYoutube size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form Card */}
        <div className="bg-darkGray rounded-2xl p-8 shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full bg-darkGray placeholder-gray-400 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-ourOrange border border-ourOrange"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full bg-darkGray placeholder-gray-400 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-ourOrange border border-ourOrange"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-darkGray placeholder-gray-400 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-ourOrange border border-ourOrange"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-darkGray placeholder-gray-400 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-ourOrange border border-ourOrange"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Type your message here..."
                className="w-full bg-darkGray placeholder-gray-400 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-ourOrange border border-ourOrange resize-none"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="px-6 py-3 bg-ourOrange hover:bg-[#efaf3a] text-white rounded-lg transition-colors"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className=" text-center py-12 px-4">
        <h3 className="text-2xl font-semibold">Prefer to reach out directly?</h3>
        <p className="text-gray-400 mt-3">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>

          <Footer />
    </>
  );
}
