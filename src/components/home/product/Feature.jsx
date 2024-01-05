import React, { useState } from "react";
import { RxCaretRight } from "react-icons/rx";
import product2 from "../../../assets/products/product3.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import { useGetProductPublished } from "../../../helper/api-hooks/useProduct";
import isEmpty from "../../../utils/isEmpty";
import { useEffect } from "react";

const Feature = () => {
  AOS.init();
  const navigate = useNavigate();
  const [feature, setFeature] = useState([]);

  const { data, isLoading } = useGetProductPublished();
  useEffect(() => {
    console.log(data);
    setFeature(data);
  }, [data]);
  const [defaultImg , setDefault] = useState(null)
  return (
    <>
      <div
        className="um-product rounded-sm shadow-md pb-6"
        data-aos="fade-right"
      >
        <div className="um-product-header h-[30%] sm:text-xl text-[16px] flex justify-between px-2 py-4 w-full items-center rounded-t-md bg-red-200">
          <div>
            <p className="font-bold sm:text-xl text-md">Featured Products</p>
          </div>
          <div className="relative z-5 um-header-button flex items-center justify-center gap-2 font-bold sm:h-[50px] h-[34px] cursor-pointer">
            <span>View</span>
            <span className="font-bold">
              <RxCaretRight />
            </span>
          </div>
        </div>

        <div className="um-product-caret flex py-2 sm:px-6 px-1 w-full gap-6  overflow-x-scroll">
          {!isEmpty(feature) &&
            feature.map((item) => (
              <React.Fragment key={item.id}>
                <div
                  className="um-product-box shadow-sm hover:shadow-md rounded-sm hover:"
                  onClick={() => navigate("/product/"+ item.metum.slug)}
                >
                  <div className="um-product-img h-[65%] relative">
                    <img
                      src={defaultImg || 
                        process.env.REACT_APP_S3_ENDPOINT +
                        "/" +
                        item.image?.thumbnails[0]
                      }
                      onError={() => 
                         setDefault("https://umecarts.com/public/assets/img/placeholder.jpg")
                      }
                      onLoad={() => 
                         setDefault(null)
                    }
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="um-product-details h-[35%] px-2 py-2">
                    <p className="text-red-700 font-extrabold">₦250</p>
                    <p className="text-sm font-bold mt-2">
                      {item.information.product_name}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </>
  );
};

export default Feature;
