let Contact = () => {
  return (
    <div className="px-5 mt-24">
      <div className="lg:flex gap-8 justify-center">
        <div className="bg-darkGray  p-7    rounded-xl  mb-14 pb-10">
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
      </div>
    </div>
  );
};

export default Contact;
