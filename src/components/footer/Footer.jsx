import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const sections = [
  {
    title: 'About',
    links: ['About Us', 'Our Mission', 'Team Members', 'Careers'],
  },
  {
    title: 'Courses',
    links: ['Web Development', 'UI/UX Design', 'Data Science', 'Mobile Apps'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Help Center', 'Community', 'Privacy Policy'],
  },
  {
    title: 'Contact',
    links: ['Support', 'Email Us', 'Locations', 'FAQs'],
  },
];

const Footer = () => (
  <footer className="bg-darkGray text-gray-200 px-6 py-12">
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
        {/* Brand and Social Section */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ourOrange">OmTech</h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4 mt-6 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-white transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white transition">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 ">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm sm:text-base lg:text-[16px]">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6">
        <p className="text-center text-xs sm:text-sm lg:text-base">&copy; {new Date().getFullYear()} OmTech. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
