import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import DashLayout from "../../layout/DashLayout";
import UploadCard from "../../dashComponents/uploadCard";
import UploadFileModal from "../../dashComponents/modal/uploadFileModal";
import { useGallery } from "../../../helper/api-hooks/useGeneral";
import isEmpty from "../../../utils/isEmpty";
import UploadCardFile from "../../dashComponents/uploadCardFile";

const UploadFile = () => {
  const {data , isLoading, refetch} = useGallery()
  const [searchToggleIcon, setSearchToggleIcon] = useState(false);
  const [isOpen , setIsOpen] = useState(false)
  const [Gallery , setGallery] = useState([])
  const handleSearchToggleIcon = () => {
    setSearchToggleIcon(!searchToggleIcon);
  };
  useEffect(() => {
    refetch();
  }, [])
  return (
    <DashLayout>
      <div className="product-dash-container">
        <div className="product-head-box">
          <div className="tit-body">
            <div className="dashbor-text">Uploaded files</div>
            <div className="dashbor-simple red">
              Manage your cloud storage for your uploaded files.
            </div>
          </div>
          <div className="btn-new">
            <button className="dash-btn" onClick={() => setIsOpen(!isOpen)}>Add New file</button>
          </div>
        </div>
        <div className="pro-main-container">
          <div className="search-procount-box rgh">
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
          {!isLoading && isEmpty(data.gallery) ?
          <div className="emppty-pro-boc">
            <div className="dashbor-text">Your Uploaded files is Empty!</div>
            <div className="pro-simple">
              You do not have any uploaded files yet.
            </div>
          </div>
          :
          <div className="nonempty-pro-container">
            {isLoading ? 
              'Loading...'  
              : 
              data.gallery.map((item) => {
                return <UploadCardFile item={item} />
              })
            }
          </div>
          }
        </div>
      </div>
      {isOpen &&
        <UploadFileModal  onlyUpload={true} onClick={() => setIsOpen(!isOpen)} setOpen={setIsOpen} setGallery={setGallery} Gallery={Gallery} />
      }
    </DashLayout>
  );
};

export default UploadFile;
