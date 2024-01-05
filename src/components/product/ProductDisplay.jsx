import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import policy from "../../assets/image/policy.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import product from "../../assets/products/product4.png";
import Feature1 from "../home/product/Feature";
import { FullModal } from "../common/Modal";
import { useUrls } from "../../helper/useUrls";
import axios from "axios";
import { BiCopy } from "react-icons/bi";
import isEmpty from "../../utils/isEmpty";

const ProductDisplay = ({ info }) => {
  const [handleModal, setModal] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    var direction;
    direction = lastScrollY > 300 ? "down" : "up";
    setScrollDirection(direction);
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      direction = scrollY > lastScrollY ? "down" : "up";
      setScrollDirection(direction);
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);
  const [indexOn, setIndex] = useState(0);
  var isDiscount = false;
  var isPrice = 0;
  switch (info?.price?.discount) {
    case "Flat":
      const discount = info?.price?.discount_flat;
      const unit_price = info?.price?.unit_price;
      if (discount === 0) {
        isDiscount = false;
        isPrice = unit_price.toLocaleString();
      } else {
        isDiscount = true;
        var calculatePercentage =
          (info?.price?.discount_flat / info?.price?.unit_price) * 100;
        isPrice = unit_price - discount;
      }

      break;
    case "Percentage":
      const percentage = info?.price?.discount_percentage;
      const unitprice = info?.price?.unit_price;
      if (percentage === 0) {
        isDiscount = false;
        isPrice = unitprice.toLocaleString();
      } else {
        isDiscount = true;
        var calculatePercentage = info?.price?.discount_percentage;
        isPrice = (
          unitprice -
          (info?.price?.discount_percentage * info?.price?.unit_price) / 100
        ).toLocaleString();
      }
      break;
  }
  return (
    <>
      {scrollDirection === "down" && (
        <div
          className="bg-white fixed z-40 top-[16%] w-full px-24 md:flex hidden justify-between items-center"
          data-aos="fade-down"
        >
          <div className="flex gap-4 font-bold p-3">
            <a
              href="#description"
              className="p-2 uppercase border-bottom-red text-black"
            >
              Product Description
            </a>
            <a href="#review" className="p-2 uppercase text-black">
              Ratings and Reviews
            </a>
          </div>

          <div>
            <div className="flex gap-3">
              <button
                className="btn-default-small bg-blue-secondary text-lg flex items-center justify-center gap-2"
                onClick={() => setModal(!handleModal)}
              >
                <FiShoppingCart /> Add to Cart
              </button>
              <button
                className="btn-default-small bg-red-secondary text-lg flex items-center justify-center gap-2"
                onClick={() => setModal(!handleModal)}
              >
                <SlHandbag /> Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="sm:px-32 px-2 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-[75%] w-full flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-6 bg-white shadow-md rounded-md p-2">
              <div className="w-full md:w-[35%] py-2">
                <div className="md:w-[295px] w-full h-[374px] md:h-[295px] rounded-lg transition ease-in-out duration-[5000ms]">
                  <img
                    src={
                      process.env.REACT_APP_S3_ENDPOINT +
                      "/" +
                      info?.image?.galleries.toReversed()[indexOn]
                    }
                    alt=""
                    className="rounded-lg transition ease-in-out delay-[5000ms] w-full h-full object-cover"
                  />
                </div>
                <div className="scroll  flex justify-center overflow-scroll w-full md:justify-start my-4 gap-4 cursor-pointer">
                  <div className="flex gap-4">
                    {info?.image?.galleries?.toReversed().map((item, index) => {
                      return (
                        <div
                          className={`h-[60px] w-[60px] ${
                            indexOn == index && "border-2 border-red-700"
                          }  rounded-lg`}
                          key={index}
                          onClick={() => setIndex(index)}
                        >
                          <img
                            src={process.env.REACT_APP_S3_ENDPOINT + "/" + item}
                            alt=""
                            className="rounded-lg w-full h-full object-cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex gap-2 items-center justify-center">
                  {info?.image?.galleries?.map((item, index) => {
                    return (
                      <div
                        className={`w-[10px] h-[10px] rounded-full ${
                          indexOn == index ? "bg-red-600" : "bg-gray-200"
                        }`}
                        key={index}
                      />
                    );
                  })}
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[12px]">Share</span>
                  <div className="flex gap-2">
                    <div className="um-footer-social rounded-full um-footer-facebook">
                      <Link to="" className="text-white">
                        <FaFacebookF />
                      </Link>
                    </div>

                    <div className="um-footer-social rounded-full um-footer-twitter">
                      <Link to="" className="text-white">
                        <AiOutlineTwitter />
                      </Link>
                    </div>

                    <div className="um-footer-social rounded-full um-footer-instagram">
                      <Link to="" className="text-white">
                        <BsInstagram />
                      </Link>
                    </div>

                    <div className="um-footer-social p-2 rounded-full um-footer-copy">
                      <Link to="" className="">
                        <BiCopy />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-[60%] w-full flex flex-col gap-6">
                <h1 className="font-extrabold text-3xl">
                  {info?.information?.product_name}
                </h1>
                <div className="flex md:none items-center gap-2">
                  <div className="flex gap-4 items-center">
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={20} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={20} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={20} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={20} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStarHalfAlt size={20} />
                    </span>
                  </div>
                  <div className="flex  items-center font-normal text-[12px] text-tertiary">
                    <span>(20 reviews)</span>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-[#2E486B] pb-1">Price</span>
                  <div className="flex items-end gap-4">
                    <h2 className="text-red-700 text-3xl font-extrabold">
                      ₦
                      {isDiscount
                        ? isPrice.toLocaleString()
                        : info?.price?.unit_price.toLocaleString()}
                      <span className="text-sm text-gray-200 font-light">
                        /{info?.information?.unit}
                      </span>
                    </h2>
                    {isDiscount && (
                      <>
                        <p className="text-sm text-gray-300">
                          <del>₦{info?.price?.unit_price.toLocaleString()}</del>
                        </p>
                        <span className="um-top-product-promo">
                          -{Math.floor(calculatePercentage)}%
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-sm text-[#2E486B] pb-1">Seller</span>
                  <div className="flex items-end gap-4">
                    {/* <div className='font-extrabold text-[14px]'>{userData?.user?.firstname} {userData?.user?.lastname}</div> */}
                  </div>
                  <div className="underline decoration-1 text-blue-600">
                    Message Seller
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm text-[#2E486B] pb-1">
                    Estimated Shipping Time
                  </span>
                  <span className="font-bold">
                    {info?.information?.shipping_days} Day(s)
                  </span>
                </div>

                <div>
                  <span className="text-sm text-[#2E486B] pb-1">Size</span>
                  <div className="flex items-end gap-4">
                    <span className="border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center">
                      41
                    </span>
                    <span className="border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center">
                      42
                    </span>
                    <span className="border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center">
                      43
                    </span>
                    <span className="border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center">
                      44
                    </span>
                    <span className="border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center">
                      45
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-[#2E486B] pb-1">
                    Colours Available
                  </span>
                  <div className="flex items-end gap-4">
                    <span className="border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#ffffff] p-4" />
                    <span className="border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#EF9F43] p-4" />
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="um-product-reading text-[20px]">-</span>
                  <h4>01</h4>
                  <span className="um-product-reading text-[20px]">+</span>
                  <p className="text-red-500 text-sm">
                    ({info?.information?.quantity}) Available
                  </p>
                </div>

                <div>
                  <span className="text-sm text-[#2E486B] pb-1">
                    Total Price
                  </span>
                  <h2 className="text-red-700 text-xl font-extrabold">
                    ₦{isPrice.toLocaleString()}
                    <span className="text-sm text-gray-200 font-light">
                      /{info?.information?.unit}
                    </span>
                  </h2>
                </div>
                {scrollDirection === 'up'  &&
                <div className="flex gap-3">
                  <button
                    className="btn-default bg-blue-secondary text-lg flex items-center justify-center gap-2"
                    onClick={() => setModal(!handleModal)}
                  >
                    <FiShoppingCart /> Add to Cart
                  </button>
                  <button
                    className="btn-default bg-red-secondary text-lg flex items-center justify-center gap-2"
                    onClick={() => setModal(!handleModal)}
                  >
                    <SlHandbag /> Buy Now
                  </button>
                </div>
                }
              </div>
            </div>

            <div>
                            <div className='flex flex-col gap-2 bg-white shadow-md rounded-md p-2'>
                                <div className='flex gap-4'>
                                    <button className={`p-2 uppercase  ${window.location.hash !== '#review' && 'border-b-2 border-[#CA0505]' }`}><a href='#description' className='text-[#1F3047] sm:text-[15px] text-[12px] font-bold'>Product Description</a></button>
                                    <button className={`p-2 uppercase  ${window.location.hash == '#review' && 'border-b-2 border-[#CA0505]' }`}><a href='#review' className='text-[#1F3047] sm:text-[15px] text-[12px] font-bold'>Ratings and Reviews</a></button>
                                </div>

                                <div className='p-2' id="description">
                                    <div dangerouslySetInnerHTML={{__html: (info?.information?.description)}} />
                                </div>
                            </div>
                        </div>
            <div>
              <div className="flex flex-col md:flex-row gap-10 bg-white shadow-md rounded-md p-4">
                <div className="flex flex-col gap-2 w-full md:w-[40%]">
                  <h4 className="text-sm text-secondary font-bold">Overview</h4>
                  <div className="flex gap-2 items-center">
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={24} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={24} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={24} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={24} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStarHalfAlt size={24} />
                    </span>
                  </div>
                  <div className="flex gap-4 items-end font-normal text-[12px] h-[30px] mb-4 text-tertiary">
                    <h2 className="text-xl font-extrabold text-secondary">
                      4.50
                      <span className="text-sm font-normal text-blue-light">
                        /5.0
                      </span>
                    </h2>
                    <span>(80)</span>
                    <span>(20 reviews)</span>
                  </div>

                  <div className="flex gap-4 items-end font-normal text-[12px]">
                    <h2 className="text-lg font-extrabold text-secondary">
                      Ratings
                    </h2>
                    <span className="text-tertiary">(80 total ratings)</span>
                  </div>

                  <div className="flex flex-col gap-1 mb-2  font-normal text-[14px] text-tertiary">
                    <div className="flex gap-2">
                      <h2 className="text-md font-extrabold">5.0</h2>
                      <div className="flex gap-1 items-center">
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                      </div>
                      <span>(20 Buyers)</span>
                    </div>
                    <div className="flex gap-2">
                      <h2 className="text-md font-extrabold">4.0</h2>
                      <div className="flex gap-1 items-center">
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStarHalfAlt size={16} />
                        </span>
                      </div>
                      <span>(20 Buyers)</span>
                    </div>
                    <div className="flex gap-2">
                      <h2 className="text-md font-extrabold">4.0</h2>
                      <div className="flex gap-1 items-center">
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#f3f3f3]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                      </div>
                      <span>(20 Buyers)</span>
                    </div>
                    <div className="flex gap-2">
                      <h2 className="text-md font-extrabold">3.0</h2>
                      <div className="flex gap-1 items-center">
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#f3f3f3]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#f3f3f3]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                      </div>
                      <span>(20 Buyers)</span>
                    </div>
                    <div className="flex gap-2">
                      <h2 className="text-md font-extrabold">2.0</h2>
                      <div className="flex gap-1 items-center">
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#f3f3f3]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#f3f3f3]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#f3f3f3]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                      </div>
                      <span>(20 Buyers)</span>
                    </div>
                    <div className="flex gap-2">
                      <h2 className="text-md font-extrabold">1.0</h2>
                      <div className="flex gap-1 items-center">
                        <span className="text-[#FFCD29]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#f3f3f3]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#f3f3f3]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#f3f3f3]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                        <span className="text-[#f3f3f3]">
                          {" "}
                          <FaStar size={16} />
                        </span>
                      </div>
                      <span>(20 Buyers)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex gap-4 items-end font-normal text-[14px] text-tertiary">
                    <h2 className="text-md font-extrabold text-secondary">
                      Reviews
                    </h2>
                    <span className="text-sm">(20 total reviews)</span>
                  </div>

                  <div className="flex flex-col  gap-2  font-normal text-[10px]">
                    <div className="flex items-end gap-4">
                      <h2 className="text-sm font-extrabold text-tertiary">
                        Krown
                      </h2>
                      <span>25th Jan, 2023</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStarHalfAlt size={16} />
                      </span>
                    </div>
                    <h2 className="text-lg font-extrabold text-tertiary">
                      Great Product
                    </h2>
                    <p className="text-[14px] text-secondary">
                      It is exactly what i ordered. I am glad that i ordered.
                    </p>
                  </div>

                  <div className="flex flex-col  gap-2  font-normal text-[10px]">
                    <div className="flex items-end gap-4">
                      <h2 className="text-sm font-extrabold text-tertiary">
                        Krown
                      </h2>
                      <span>25th Jan, 2023</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStarHalfAlt size={16} />
                      </span>
                    </div>
                    <h2 className="text-lg font-extrabold text-tertiary">
                      Great Product
                    </h2>
                    <p className="text-[14px] text-secondary">
                      It is exactly what i ordered. I am glad that i ordered. It
                      is exactly what i ordered. I am glad that i ordered.It is
                      exactly what i ordered. I am glad that i ordered.
                    </p>
                  </div>
                  <div className="flex flex-col  gap-2  font-normal text-[10px]">
                    <div className="flex items-end gap-4">
                      <h2 className="text-sm font-extrabold text-tertiary">
                        Krown
                      </h2>
                      <span>25th Jan, 2023</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStarHalfAlt size={16} />
                      </span>
                    </div>
                    <h2 className="text-lg font-extrabold text-tertiary">
                      Great Product
                    </h2>
                    <p className="text-[14px] text-secondary">
                      It is exactly what i ordered. I am glad that i ordered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[20%] hidden md:flex flex-col gap-4">
            <div className="bg-white rounded-md">
              <h3 className="uppercase flex justify-start items-center font-bold pl-6 h-[40px]">
                Refund Policy
              </h3>
              <hr />
              <div className="flex flex-col justify-start  font-bold pl-4 py-4">
                <img src={policy} alt="" srcset="" />
                <Link
                  to="/view-policy"
                  className="text-red-400 font-normal text-[12px] mt-2"
                >
                  View Policy
                </Link>
              </div>
            </div>

            <div className="bg-white px-2 py-4 rounded-md">
              <h3 className="uppercase flex justify-start items-center font-bold pl-6 h-[40px]">
                Ratings and Reviews
              </h3>
              <hr />
              <div className="flex flex-col justify-start font-bold pl-4 pr-6">
                <div className="py-2 flex gap-2 items-center">
                  <span className="text-[#FFCD29]">
                    {" "}
                    <FaStar size={24} />
                  </span>
                  <span className="text-[#FFCD29]">
                    {" "}
                    <FaStar size={24} />
                  </span>
                  <span className="text-[#FFCD29]">
                    {" "}
                    <FaStar size={24} />
                  </span>
                  <span className="text-[#FFCD29]">
                    {" "}
                    <FaStar size={24} />
                  </span>
                  <span className="text-[#FFCD29]">
                    {" "}
                    <FaStarHalfAlt size={24} />
                  </span>
                </div>
                <div className="flex gap-4 items-end font-normal text-[12px] h-[30px] mb-4 text-tertiary">
                  <h2 className="text-xl font-extrabold text-secondary">
                    4.50
                    <span className="text-sm font-normal text-blue-light">
                      /5.0
                    </span>
                  </h2>
                  <span>(80)</span>
                  <span>(20 reviews)</span>
                </div>

                <div className="flex gap-4 items-end font-normal text-[12px]">
                  <h2 className="text-lg font-extrabold text-secondary">
                    Ratings
                  </h2>
                  <span className="text-tertiary">(80 total ratings)</span>
                </div>

                <div className="flex flex-col gap-1 mb-2  font-normal text-[14px] text-tertiary">
                  <div className="flex gap-2">
                    <h2 className="text-md font-extrabold">5.0</h2>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                    </div>
                    <span>(20)</span>
                  </div>
                  <div className="flex gap-2">
                    <h2 className="text-md font-extrabold">4.0</h2>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStarHalfAlt size={16} />
                      </span>
                    </div>
                    <span>(20)</span>
                  </div>
                  <div className="flex gap-2">
                    <h2 className="text-md font-extrabold">4.0</h2>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#f3f3f3]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                    </div>
                    <span>(20)</span>
                  </div>
                  <div className="flex gap-2">
                    <h2 className="text-md font-extrabold">3.0</h2>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#f3f3f3]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#f3f3f3]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                    </div>
                    <span>(20)</span>
                  </div>
                  <div className="flex gap-2">
                    <h2 className="text-md font-extrabold">2.0</h2>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#f3f3f3]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#f3f3f3]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#f3f3f3]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                    </div>
                    <span>(20)</span>
                  </div>
                  <div className="flex gap-2">
                    <h2 className="text-md font-extrabold">1.0</h2>
                    <div className="flex gap-1 items-center">
                      <span className="text-[#FFCD29]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#f3f3f3]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#f3f3f3]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#f3f3f3]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                      <span className="text-[#f3f3f3]">
                        {" "}
                        <FaStar size={16} />
                      </span>
                    </div>
                    <span>(20)</span>
                  </div>
                </div>

                <div className="flex gap-4 items-end font-normal text-[14px] text-tertiary">
                  <h2 className="text-lg font-extrabold text-secondary">
                    Reviews
                  </h2>
                  <span>(20 total reviews)</span>
                </div>

                <div className="flex flex-col  gap-2  font-normal text-[10px]">
                  <div className="flex items-end gap-4">
                    <h2 className="text-sm font-extrabold text-tertiary">
                      Krown
                    </h2>
                    <span>25th Jan, 2023</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={16} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={16} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={16} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={16} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStarHalfAlt size={16} />
                    </span>
                  </div>
                  <h2 className="text-lg font-extrabold text-tertiary">
                    Great Product
                  </h2>
                  <p className="text-[14px] text-secondary">
                    It is exactly what i ordered. I am glad that i ordered.
                  </p>
                </div>

                <div className="flex flex-col  gap-2  font-normal text-[10px]">
                  <div className="flex items-end gap-4">
                    <h2 className="text-sm font-extrabold text-tertiary">
                      Krown
                    </h2>
                    <span>25th Jan, 2023</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={16} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={16} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={16} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStar size={16} />
                    </span>
                    <span className="text-[#FFCD29]">
                      {" "}
                      <FaStarHalfAlt size={16} />
                    </span>
                  </div>
                  <h2 className="text-lg font-extrabold text-tertiary">
                    Great Product
                  </h2>
                  <p className="text-[14px] text-secondary">
                    It is exactly what i ordered. I am glad that i ordered.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white px-2 h-full py-4 rounded-md">
              <h3 className="uppercase flex justify-start items-center font-bold pl-6 h-[50px]">
                Store Information
              </h3>
              <hr />

              <span className="text-[10px]">Store Name</span>
              <div className="h-[40px]">
                <div className="font-extrabold">SAMUELKROWN</div>
              </div>

              <span className="text-[10px]">Store Address</span>
              <h4 className="font-bold">
                15, Idi-Omo, Lagere, Ile-Ife, Osun State.
              </h4>

              <button className="btn-outline mt-6">
                <Link to="/">View store</Link>
              </button>
            </div>
          </div>
        </div>
        <Feature1 />
        <Feature1 />
      </div>

      {handleModal ? (
        <FullModal
          Style="w-[60%]"
          Label="Please select a variation"
          onclick={() => setModal(!handleModal)}
          info={info}
        />
      ) : (
        <div className="fixed block md:hidden bottom-0 bg-white p-3 min-h-[100px] z-50 w-screen">
          <div className="flex justify-between w-full">
            <button
              className="bg-blue-secondary text-lg flex items-center justify-center gap-3 w-[45%] text-white h-[56px] rounded-md"
              onClick={() => setModal(!handleModal)}
            >
              <FiShoppingCart /> Add to Cart
            </button>
            <button
              className="bg-red-secondary text-lg flex items-center justify-center gap-3 w-[45%] text-white h-[56px] rounded-md"
              onClick={() => setModal(!handleModal)}
            >
              <SlHandbag /> Buy Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDisplay;
