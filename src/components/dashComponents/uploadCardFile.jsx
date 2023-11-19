import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import UploadModal from "./modal/uploadModal";
const UploadCardFile = ({
  item
}) => {
  const [uploadToggleIcon, setUploadToggleIcon] = useState(false);
  const handleUploadToggleIcon = () => {
    setUploadToggleIcon(!uploadToggleIcon);
  };
  var split = item.link.split('.');
  var filename = split[0];
  var extension = split[1];
   if (filename.length > 10) {
      filename = filename.substring(0, 10);
   }
   return (
    <div className="pro-card-container h-[238px] w-[187px]">
      <div className="pro-img-con h-[75%] rounded-t-[8px] w-full bg-gray-200">
        <img src={process.env.REACT_APP_S3_ENDPOINT+'/'+item.link} alt="" className="pro-img rounded-t-[8px] object-cover h-full w-full" />
        <BsThreeDotsVertical
          className="men-icon"
          onClick={handleUploadToggleIcon}
        />
        {uploadToggleIcon && <UploadModal item={item} />}
      </div>

      <div className="pro-card-body-box">
        <div className="product-name">{filename + '.' + extension}</div>
        <div className="pro-type">{item.size >= 1000000 ? Math.floor(item.size / 1000000) + "MB" : Math.floor(item.size / 1000) + "KB"}</div>
      </div>
    </div>
  );
};

export default UploadCardFile;
