import {
  faBox,
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let Contact = () => {
  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-darkGray focus:outline-none focus:ring-2 focus:ring-ourOrange ";

  return (
    <div className="px-7 md:px-14 xl:px-52 my-24 ">
      <div className="lg:flex gap-8 justify-center ">
        {/* <div className="bg-darkGray  p-7    rounded-xl  mb-14 pb-10">
          <h2 className="font-bold text-[26px] py-4  ">
            {" "}
            Need Help? Open a Ticket{" "}
          </h2>
          <p className="text-gray-400 text-xl">
            {" "}
            Lorem Ispum doller sinf is sething Lorem Ispum doller sinf{" "}
          </p>
          <form className="mt-10">
            <div>
              <label>You Name</label>
              <input
                placeholder="Enter your name"
                className="w-full bg-[#606060] rounded-md py-3 px-6 text-lg mt-3 mb-7 outline-none"
              />
            </div>

            <div>
              <label>You Email</label>
              <input
                placeholder="Enter your email"
                className="w-full bg-[#606060] rounded-md py-3 px-6 text-lg mt-3 mb-7 outline-none"
              />
            </div>

            <label>You Message</label>
            <textarea
              className="w-full bg-[#606060] rounded-md py-3 px-6 text-lg mt-3 mb-7 outline-none"
              placeholder="Enter your Message"
              rows="4"
            />
            <button className="bg-ourOrange hover:bg-[#efaf3a] transition rounded-md py-4 px-9  ">
              Submit Ticket
            </button>
          </form>
        </div>
         */}

         <div className="bg-darkGray w-full h-auto flex p-2 flex-col lg:h-[550px] lg:flex-row">
      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-full">
        {/* Left Panel */}
        <div className="relative w-full xl:w-[50%] bg-ourOrange rounded-2xl px-8 py-12 overflow-hidden">
          <p className=" text-3xl font-bold">Contact Information</p>
          <p className="text-xl mt-5">
            Lorem ispum doler sign is met kia tom nehi cat cah nehi cat cah
            cat cah me{" "}
          </p>

          <div className="mt-10 text-xl flex flex-col gap-8">
            <p>
              <span className="mr-2">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              0788198073
            </p>
            <p>
              <span className="mr-2">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              hameedukarimi@gmail.com
            </p>
            <p>
              <span className="mr-2">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              https://hkarimi.vercel.app/
            </p>
          </div>

          <div className="absolute -bottom-12 -right-16 h-60 w-60 rounded-full bg-[linear-gradient(180deg,_gray_0%,_rgba(223,138,149,0)_89%)]"></div>
        </div>

        {/* Right Panel (Form) */}
        <div className="w-full p-4 pt-10 lg:p-10 lg:pt-16 rounded-2xl">
          <form className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="fullName"
                  className="mb-1 text-sm font-medium "
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your name"
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-1 text-sm font-medium "
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="mb-1 text-sm font-medium "
              >
                Your Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject of your message"
                className={inputClasses}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <p className="text-ourOrange font-bold text-xl mb-2">
                Message
              </p>
              <label
                htmlFor="message"
                className="mb-1 text-sm font-medium "
              >
                Tell Us Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="4"
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="px-5 py-3 bg-ourOrange  font-semibold rounded-lg shadow hover:bg-[#efaf3a] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Contact;
