import { useState } from "react";
import { PiWarningCircleBold } from "react-icons/pi";
import "../../../styles/dash-css/shopComponent.css";
import { PrimaryInput } from "../../common/Inputs";
const BannerSocialLinks = () => {
  const [fileName, setFileName] = useState("Click to add a File...");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("Click to add a File...");
    }
  };
  return (
    <>
      <div className="pro-main-container">
        <div className="close-head">
          <div className="det-head">Shop Banners</div>
        </div>
        <form action="" className="bannerForm">
          <div className="inp-lab-con">
            <label htmlFor="" className="banlab">
              Banners <span>(1500x450px)</span>
            </label>
            <div className="input-file absol">
              <label className="browse-file" htmlFor="shop-logo">
                Browse
              </label>
              <input
                type="file"
                id="shop-logo"
                className="details-inp "
                onChange={handleFileChange}
                accept="image/*"
              />
              <span htmlFor="shop-logo" className="adjs">
                {fileName}
              </span>
            </div>
          </div>
          <div className="close-head">
            <div className="det-head dccb">Social Media Links</div>
          </div>
          <div className="flex flex-col">
            <PrimaryInput 
               label={"Facebook"}
               placeholder={"E.g., https://www.facebook.com"}
               className={"w-full flex flex-col gap-1 py-4"}
               info={true}
               infoText={"Please paste link with https"}
            />
            <PrimaryInput 
               label={"Google"}
               placeholder={"E.g., https://www.google.com"}
               className={"w-full flex flex-col gap-1 py-4"}
               info={true}
               infoText={"Please paste link with https"}
            />
            <PrimaryInput 
               label={"Instagram"}
               placeholder={"E.g., https://www.instagram.com"}
               className={"w-full flex flex-col gap-1 py-4"}
               info={true}
               infoText={"Please paste link with https"}
            />
            <PrimaryInput 
               label={"Twitter"}
               placeholder={"E.g., https://www.twitter.com"}
               className={"w-full flex flex-col gap-1 py-4"}
               info={true}
               infoText={"Please paste link with https"}
            />
            <PrimaryInput 
               label={"YouTube"}
               placeholder={"E.g., https://www.youtube.com"}
               className={"w-full flex flex-col gap-1 py-4"}
               info={true}
               infoText={"Please paste link with https"}
            />
          </div>
          <div className="btn-new with rit">
            <button className="dash-btn ind ">Save Changes</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BannerSocialLinks;