import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import banner from "../../assets/image/banner.png";
import banner2 from "../../assets/image/cart banner.png";
import banner3 from "../../assets/image/cart banner full.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const BannerLatest = () => {
  const images = [
    { img: banner },
    { img: banner2 },
    { img: banner },
    { img: banner3 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the interval time as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [activeIndex, images.length]);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2 justify-center w-full">
        <div className="um-main-banne w-full relative">
          <div className="contrller-cnt absolute top-40 flex w-full justify-between px-20">
            <div
              className="each-icon-bx bg-[#ffffff5e] w-[30px] h-[30px] flex items-center justify-center text-[25px] rounded-full cursor-pointer"
              onClick={prevImage}
            >
              <FaAngleLeft />
            </div>
            <div
              className="each-icon-bx bg-[#ffffff5e] w-[30px] h-[30px] flex items-center justify-center text-[25px] rounded-full cursor-pointer"
              onClick={nextImage}
            >
              <FaAngleRight />
            </div>
          </div>
          <div className="um-main-ig">
            <img
              src={images[activeIndex].img}
              alt=""
              srcSet=""
              className="w-full h-[55vh] mage-hero"
            />
          </div>
          <div className="flex text-center items-center justify-center mt-2 gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`um-main-pagination ${
                  index === activeIndex ? "um-main-pagination-active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerLatest;
