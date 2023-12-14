import React, { useState } from "react";
import Layout from "../layout/Layout";
import { useMediaQuery } from "react-responsive";
import { MdOutlineHome } from "react-icons/md";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";
import "../../styles/category.css";

const Category = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 544px)" });

  // Main Categories Data
  const mainCategories = [
    { id: 1, icon: "/image/uman.png", name: "Fashion & Clothing" },
    { id: 2, icon: "/image/day.png", name: "Computers & Gadgets" },
    { id: 3, icon: "/image/wat.png", name: "Phones & Tablets" },
    { id: 4, icon: "/image/bea.png", name: "Beauty, Health & Hair" },
    { id: 5, icon: "/image/wat.png", name: "Electronics & Accessories" },
    { id: 6, icon: "/image/fur.png", name: "Furnitures" },
    { id: 7, icon: "/image/uman.png", name: "Sports & Outdoor" },
    { id: 8, icon: "/image/bea.png", name: "Other" },
  ];

  // Sub Categories Data
  const subCategoriesMapping = {
    1: [
      "Clothes",
      "Shoes",
      "Rings and Bracelets",
      "Underwears",
      "Night Garments",
      "Remaining Clothes",
      "Other Clothes types",
    ],
    2: ["Remaining Clothes", "Other Clothes types"],
    3: ["Clothes", "Shoes", "Remaining Clothes", "Other Clothes types"],
    4: ["Clothes", "Shoes"],
    5: ["Underwears", "Night Garments"],
    6: [
      "Shoes",
      "Rings and Bracelets",
      "Remaining Clothes",
      "Other Clothes types",
    ],
    7: ["Clothes", "Rings and Bracelets", "Underwears", "Other Clothes types"],
    8: [
      "Underwears",
      "Night Garments",
      "Remaining Clothes",
      "Other Clothes types",
    ],
  };

  const [activeMainCategory, setActiveMainCategory] = useState(1);
  const [isFullfooter] = useState(true);
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleSubCategories = (categoryId) => {
    setShowSubCategories(!showSubCategories);
    setActiveCategory(categoryId);
  };

  return (
    <div>
      <Layout nil={"nil"} isFullfooter={isFullfooter}>
        <div className="red-pd lg:px-32 sm:px-12 px-2 py-3">
          <div className="navig-indict flex items-center gap-2">
            <div className="each-navig flex items-center gap-1">
              <MdOutlineHome className="text-[25px]" />
              <span>Home</span>
            </div>
            <FaChevronRight />
            <div className="each-navig">
              <span>Categories</span>
            </div>
          </div>

          <div className="main-box-cnt my-5">
            <div className="head-bxx bg-[#FEF0F0] p-5 font-[900] border border-[#F0F7FF]">
              Categories
            </div>

            <div className="main-cate bg-white flex">
              <div className="left-cate-bx w-[40%]">
                <div className="cate-top font-bold p-3 rmv">
                  Main Categories
                </div>
                <div className="list-cate-cnt">
                  {mainCategories.map((category) => (
                    <div className="">
                      <div className="mobl cate-ls" key={category.id}>
                        <div
                          className={` flex items-center p-1 gap-2 cursor-pointer ${
                            category.id === activeMainCategory ? "act-ls" : ""
                          }`}
                          onClick={() => setActiveMainCategory(category.id)}
                        >
                          <div className="inc w-[40px] h-[40px] rounded-full flex items-center justify-center">
                            <img src={category.icon} alt="" className="" />
                          </div>
                          <div className="ls-cate">{category.name}</div>
                        </div>
                        <div
                          className=""
                          onClick={() => toggleSubCategories(category.id)}
                        >
                          {activeCategory === category.id &&
                          showSubCategories ? (
                            <FaChevronUp className="nonm cursor-pointer" />
                          ) : (
                            <FaChevronRight className="nonm cursor-pointer" />
                          )}
                        </div>
                      </div>
                      {activeCategory === category.id && showSubCategories && (
                        <div className="lon">
                          <div className="righ-cate-bx w-full nonm">
                            <div className="list-cate-cnt">
                              {subCategoriesMapping[activeCategory].map(
                                (subcategory, index) => (
                                  <div
                                    key={index}
                                    className={`cursor-pointer p-3 act-sub`}
                                  >
                                    {subcategory}
                                  </div>
                                )
                              )}
                            </div>
                          </div>{" "}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="righ-cate-bx w-full">
                <div className="cate-top font-bold p-3  rmv">
                  Sub Categories
                </div>
                <div className="list-cate-cnt">
                  {subCategoriesMapping[activeMainCategory].map(
                    (subcategory, index) => (
                      <div key={index} className={`cursor-pointer p-3 act-sub`}>
                        {subcategory}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Category;
