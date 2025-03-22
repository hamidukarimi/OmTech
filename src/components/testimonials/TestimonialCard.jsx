import { useState } from "react";
import Skeleton from "react-loading-skeleton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

let TestimonialCard = ({ message, image, name, position }) => {
  // State to check if the main course image has finished loading
  const [imageLoaded, setImageLoaded] = useState(false);

  // isLoading here is determined by whether the image has loaded
  const isLoading = !imageLoaded;

  // When the image loads, update the state
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="bg-[#373737] py-9 px-7 mt-16  rounded-md ">
      <span className="text-amber-500 flex gap-1.5 mb-5 text-lg">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </span>

      <p className="text-gray-300  mb-7 text-xl">{message}</p>
      <hr />

      <div className="flex items-center gap-3 mt-10 ">
        {!imageLoaded && (
          <Skeleton
            height={65}
            width={65}
            baseColor="darkGray"
            className="rounded-full"
          />
        )}
        {/* Render the image but hide it until it's loaded */}
        <img
          onLoad={handleImageLoad}
          style={{ display: imageLoaded ? "block" : "none" }}
          className="w-16 h-16  rounded-full object-cover "
          src={image}
        />
        
        <div>
          <p className="text-xl font-bold pb-2">{name}</p>
          <p className="text-gray-300 text-md">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
