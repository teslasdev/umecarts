import { useState } from "react";
import { CustomBadge } from "../common/Badge";
import Layout from "../layout/Layout";
import FilterP from "../product/FilterP";
import SearchP from "../product/SearchP";
import { FiFilter } from "react-icons/fi";

const CartgoryProduct = () => {
  const [isFilter, SetIsFilter] = useState(false);

  const handleIsFilter = () => {
    SetIsFilter(true);
  };
  const handleIsFilterClose = () => {
    SetIsFilter(false);
  };
  return (
    <>
      <Layout>
        <div className="cate-pro-list px-20 my-10 ">
          <CustomBadge name1={"Home"} name2={"Category"} name3={"Clothes"} />
          <div className="relative">
            <div className="mob-filter-bx flex justify-between items-center my-10">
              <select name="" id="">
                <option value="">Newest Arrival</option>
                <option value="">Oldest Arrival</option>
                <option value="">Newest Arrival</option>
              </select>

              <div
                className="filter-icon cursor-pointer  text-[20px] flex gap-3 items-center"
                onClick={handleIsFilter}
              >
                Filter
                <FiFilter />
              </div>
            </div>
            <div className="categ-box flex gap-4 items-start ">
              <FilterP
                isFilter={isFilter}
                handleIsFilterClose={handleIsFilterClose}
              />
              <div className="search-products-bx w-full overflow-hidden">
                <div className=" bg-[#FEF0F0] p-5  border border-[#F0F7FF] flex justify-between items-center">
                  <div className="ser-in font-[900]">Clothes</div>
                  <select name="" id="" className="sel-cate">
                    <option value="">Newest Arrival</option>
                    <option value="">Oldest Arrival</option>
                    <option value="">Newest Arrival</option>
                  </select>
                </div>
                <div className="all-sear-product bg-white ">
                  <SearchP />
                  <SearchP />
                  <SearchP />
                  <SearchP />
                  <SearchP />
                  <SearchP />
                  <SearchP />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CartgoryProduct;
