import { PrimaryButton } from "../common/Button";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { TiMinus } from "react-icons/ti";
import CheckBox from "../common/CheckBox";
import { IoClose } from "react-icons/io5";

const FilterP = ({ isFilter, handleIsFilterClose }) => {
  const [ageRange, setAgeRange] = useState([18, 60]); // Initial age range
  const [rangContPosition, setRangContPosition] = useState(0);

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
          <div className="font-[800] w-full">Price Range</div>

          <div className="age-range-bx my-3">
            <div className="main-slider">
              <Slider
                range
                value={ageRange}
                min={18}
                max={60}
                defaultValue={ageRange}
                onChange={handleSliderChange}
                trackStyle={[
                  {
                    backgroundColor: "#004399",
                    height: "5px",
                  },
                ]}
                handleStyle={[
                  {
                    borderColor: "#004399",
                    backgroundColor: "#004399",
                    marginLeft: "6px",
                    width: "20px",
                    height: "20px",
                    marginTop: "-8px",
                  },
                  {
                    borderColor: "#004399",
                    backgroundColor: "#004399",
                    marginLeft: "-6px",
                    width: "20px",
                    height: "20px",
                    marginTop: "-8px",
                  },
                ]}
                railStyle={{ backgroundColor: "#f5f5f5" }} // Rail color
              />
            </div>
          </div>
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
        <div className="brand-box border-0 border-b border-[#F0F7FF] p-4">
          <div className="font-[800] w-full">Brand</div>
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
        <div className="brand-box border-0 border-b border-[#F0F7FF] p-4">
          <div className="font-[800] w-full">Discounts</div>
          <div className="search-bx border border-[#1F3047] rounded-[8px] px-2 flex items-center h-[40px] my-2">
            <IoSearch />
            <input type="text" className="w-[90%] outline-none px-2" />
          </div>
          <div className="check-box">
            <CheckBox name={"1%-20%"} />
            <CheckBox name={"21%-40%"} />
            <CheckBox name={"No discount"} />
          </div>
        </div>{" "}
        <div className="brand-box border-0 border-b border-[#F0F7FF] p-4">
          <div className="font-[800] w-full">Colours</div>
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
        <div className="brand-box border-0 border-b border-[#F0F7FF] p-4">
          <div className="font-[800] w-full">Sizes</div>
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
        <div className="brand-box border-0 border-b border-[#F0F7FF] p-4">
          <div className="font-[800] w-full">Rating</div>
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
        <div className="btn-mobile-app p-3 flex justify-between w-[100%] mt-10">
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
