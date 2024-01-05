import { PrimaryButton } from "../common/Button";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaStar, FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import CheckBox from "../common/CheckBox";
import { IoClose } from "react-icons/io5";
const FilterP = ({ isFilter, handleIsFilterClose }) => {
  const [ageRange, setAgeRange] = useState([18, 60]); // Initial age range
  const [rangContPosition, setRangContPosition] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const [isDown2, setIsDown2] = useState(false);
  const [isDown3, setIsDown3] = useState(false);
  const [isDown4, setIsDown4] = useState(false);
  const [isDown5, setIsDown5] = useState(false);
  const [isDown6, setIsDown6] = useState(false);

  const handleClick = () => {
    setIsDown(true);
  };
  const handleClickClose = () => {
    setIsDown(false);
  };
  const handleClickTwo = () => {
    setIsDown2(true);
  };
  const handleClickTwoClose = () => {
    setIsDown2(false);
  };
  const handleClickTre = () => {
    setIsDown3(true);
  };
  const handleClickTreClose = () => {
    setIsDown3(false);
  };
  const handleClickFour = () => {
    setIsDown4(true);
  };
  const handleClickFourClose = () => {
    setIsDown4(false);
  };
  const handleClickFive = () => {
    setIsDown5(true);
  };
  const handleClickFiveClose = () => {
    setIsDown5(false);
  };
  const handleClicksix = () => {
    setIsDown6(true);
  };
  const handleClicksixClose = () => {
    setIsDown6(false);
  };
  const handleSliderChange = (value) => {
    setAgeRange(value);
    // Calculate the position based on the percentage of the range
    const position = ((value[1] - 18) / (60 - 18)) * 100;
    setRangContPosition(position);
  };

  console.log(rangContPosition);
  return (
    <div
      className={`filter-main-cart w-[35%]  ${isFilter ? "mobil-filt" : ""}`}
    >
      <div className="left-filter w-[100%] bg-white rounded-[5px] h-full pb-40">
        <div className="top-filt flex justify-between  w-[100%] border-0 border-b border-[#F0F7FF] p-4">
          <div className="font-[800] w-[100%] ">FILTER OPTIONS</div>
          <div className="btn-app">
            <PrimaryButton
              name={"Apply"}
              classNameButton={"bg-[#004399] text-[#fff] p-2 rounded px-4"}
            />
          </div>
          <div
            className="cls-in text-[23px] cursor-pointer"
            onClick={handleIsFilterClose}
          >
            <IoClose />
          </div>
        </div>
        <div className="price-ran border-0 border-b border-[#F0F7FF] p-4">
          <div className="fil-row flex items-center ">
            <div className="font-[800] w-full">Price Range</div>
            {isDown ? (
              <FaAngleDown className="cls-in" onClick={handleClickClose} />
            ) : (
              <FaAngleRight onClick={handleClick} className="cls-in" />
            )}
          </div>
          <div className={`opcls ${isDown ? "opn" : "clss "}`}>
            <div className="age-range-bx my-3"></div>
            <div className="min-max-bx text-[#94A3B8] flex justify-between">
              <div className="mmx">Min</div>
              <div className="mmx">Max</div>
            </div>
            <div className="input-rang-bx flex items-center w-full">
              <input
                type="text"
                className="rang-inp outline-none rounded-[8px] border border-[#94A3B8] h-[40px] px-3 w-[50%]"
                placeholder={`# ${ageRange[0]}`}
              />
              <TiMinus className="text-[#94A3B8]" />
              <input
                type="text"
                className="rang-inp outline-none rounded-[8px] border border-[#94A3B8] h-[40px] px-3 w-[50%]"
                placeholder={`# ${ageRange[1]}`}
              />
            </div>
          </div>
        </div>
        <div className="brand-box border-0 border-b border-[#F0F7FF] p-4">
          <div className="fil-row flex items-center ">
            <div className="font-[800] w-full">Brand</div>
            {isDown2 ? (
              <FaAngleDown className="cls-in" onClick={handleClickTwoClose} />
            ) : (
              <FaAngleRight onClick={handleClickTwo} className="cls-in" />
            )}
          </div>
          <div className={`opcls ${isDown2 ? "opn" : "clss "}`}>
            <div className="search-bx border border-[#1F3047] rounded-[8px] px-2 flex items-center h-[40px] my-2">
              <IoSearch />
              <input type="text" className="w-[90%] outline-none px-2" />
            </div>
            <div className="check-box">
              <CheckBox name={"Zara"} />
              <CheckBox name={"Gucci"} />
              <CheckBox name={"Akube"} />
            </div>
          </div>
        </div>
        <div className="brand-box border-0 border-b border-[#F0F7FF] p-4">
          <div className="fil-row flex items-center ">
            <div className="font-[800] w-full">Discounts</div>
            {isDown3 ? (
              <FaAngleDown className="cls-in" onClick={handleClickTreClose} />
            ) : (
              <FaAngleRight onClick={handleClickTre} className="cls-in" />
            )}
          </div>
          <div className={`opcls ${isDown3 ? "opn" : "clss "}`}>
            <div className="search-bx border border-[#1F3047] rounded-[8px] px-2 flex items-center h-[40px] my-2">
              <IoSearch />
              <input type="text" className="w-[90%] outline-none px-2" />
            </div>
            <div className="check-box">
              <CheckBox name={"1%-20%"} />
              <CheckBox name={"21%-40%"} />
              <CheckBox name={"No discount"} />
            </div>
          </div>
        </div>{" "}
        <div className="brand-box border-0 border-b border-[#F0F7FF] p-4">
          <div className="fil-row flex items-center ">
            <div className="font-[800] w-full">Colours</div>
            {isDown4 ? (
              <FaAngleDown className="cls-in" onClick={handleClickFourClose} />
            ) : (
              <FaAngleRight onClick={handleClickFour} className="cls-in" />
            )}
          </div>
          <div className={`opcls ${isDown4 ? "opn" : "clss "}`}>
            <div className="search-bx border border-[#1F3047] rounded-[8px] px-2 flex items-center h-[40px] my-2">
              <IoSearch />
              <input type="text" className="w-[90%] outline-none px-2" />
            </div>
            <div className="check-box">
              <CheckBox name={"White"} />
              <CheckBox name={"Violent"} />
              <CheckBox name={"Blue"} />
            </div>
          </div>
        </div>
        <div className="brand-box border-0 border-b border-[#F0F7FF] p-4">
          <div className="fil-row flex items-center ">
            <div className="font-[800] w-full">Sizes</div>
            {isDown5 ? (
              <FaAngleDown className="cls-in" onClick={handleClickFiveClose} />
            ) : (
              <FaAngleRight onClick={handleClickFive} className="cls-in" />
            )}
          </div>
          <div className={`opcls ${isDown5 ? "opn" : "clss "}`}>
            <div className="search-bx border border-[#1F3047] rounded-[8px] px-2 flex items-center h-[40px] my-2">
              <IoSearch />
              <input type="text" className="w-[90%] outline-none px-2" />
            </div>
            <div className="check-box">
              <CheckBox name={"S"} />
              <CheckBox name={"M"} />
              <CheckBox name={"L"} />
            </div>
          </div>
        </div>
        <div className="brand-box border-0 border-b border-[#F0F7FF] p-4">
          <div className="fil-row flex items-center ">
            <div className="font-[800] w-full">Rating</div>
            {isDown6 ? (
              <FaAngleDown className="cls-in" onClick={handleClicksixClose} />
            ) : (
              <FaAngleRight onClick={handleClicksix} className="cls-in" />
            )}
          </div>
          <div className={`opcls ${isDown6 ? "opn" : "clss "}`}>
            <div className="search-bx border border-[#1F3047] rounded-[8px] px-2 flex items-center h-[40px] my-2">
              <IoSearch />
              <input type="text" className="w-[90%] outline-none px-2" />
            </div>
            <div className="check-box">
              <CheckBox
                name={
                  <div className="flex items-center">
                    <FaStar className="text-[#FFCD29]" />{" "}
                    <FaStar className="text-[#FFCD29]" />
                    <FaStar className="text-[#FFCD29]" />
                    <FaStar className="text-[#FFCD29]" />
                    <FaStar className="text-[#FFCD29]" />
                  </div>
                }
              />
              <CheckBox
                name={
                  <div className="flex items-center">
                    <FaStar className="text-[#FFCD29]" />{" "}
                    <FaStar className="text-[#FFCD29]" />
                    <FaStar className="text-[#FFCD29]" />
                    <FaStar className="text-[#FFCD29]" />
                    <FaStar className="text-[#D5D8DC]" />
                  </div>
                }
              />
              <CheckBox
                name={
                  <div className="flex items-center">
                    <FaStar className="text-[#FFCD29]" />{" "}
                    <FaStar className="text-[#FFCD29]" />
                    <FaStar className="text-[#FFCD29]" />
                    <FaStar className="text-[#D5D8DC]" />
                    <FaStar className="text-[#D5D8DC]" />
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <div className="btn-mobile-app p-3  justify-between w-[100%] mt-10 cls-in">
          <PrimaryButton
            name={"Reset"}
            classNameButton={
              "bg-[#fff] w-[50%] border border-[#004399] p-2 rounded px-4 text-[#004399]"
            }
          />
          <PrimaryButton
            name={"Apply"}
            classNameButton={
              "bg-[#004399] w-[50%] text-[#fff] p-2 rounded px-4"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FilterP;
