import { HiOutlineSearch } from "react-icons/hi";
import "../../../styles/dash-css/productDash.css";
import "../../../styles/dash-css/mainSide.css";
import { useEffect, useState } from "react";
import ProductCard from "../../dashComponents/productCard";
import products from "../../../utils/product.json";
import isEmpty from "../../../utils/isEmpty";
import DashLayout from "../../layout/DashLayout";
import PaginationComponent from "../../model/Pagination";
import { useNavigate } from "react-router";
const DashProduct = () => {
  const navigate =useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchToggleIcon, setSearchToggleIcon] = useState(false);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const handleSearchToggleIcon = () => {
    setSearchToggleIcon(!searchToggleIcon);
  };
  const totalProduct = products.length;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page changes
  }, [currentPage]);

  const handleNavigate = () => {
    navigate('/seller/product/add')
  }
  return (
    <DashLayout>
      <div className="product-dash-container">
        <div className="product-head-box">
          <div className="tit-body">
            <div className="dashbor-text">Products</div>
            <div className="dashbor-simple red">Manage or add new Products</div>
          </div>
          <div className="btn-new">
            <button className="dash-btn" onClick={handleNavigate}>Add new product</button>
          </div>
        </div>
        <div className="pro-main-container">
          <div className="search-procount-box">
            <div className="product-count">{totalProduct} Products</div>
            <input
              type="text"
              className={searchToggleIcon ? "search-inp disp" : "search-inp"}
              placeholder="Search for a product..."
            />
            <HiOutlineSearch
              className="search-icon"
              onClick={handleSearchToggleIcon}
            />
          </div>
          {isEmpty(products) ? (
            <div className="emppty-pro-boc">
              <div className="dashbor-text">No Products Added!</div>
              <div className="pro-simple">
                You do not have any products added yet.
              </div>
            </div>
          ) : (
            <div className="nonempty-pro-container">
              {displayedProducts.map((item, index) => (
                <ProductCard key={index} props={item} />
              ))}
            </div>
          )}
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </DashLayout>
  );
};

export default DashProduct;
