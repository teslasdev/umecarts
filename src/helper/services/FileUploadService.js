import http from "../../http-common";
import { getAuthToken } from "../axiosConfig";
import { useUrls } from "../useUrls";


const upload = (file, onUploadProgress) => {
  let formData = new FormData();
  formData.append("files", file);

  return http.post(process.env.REACT_APP_API_URL+"/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.get("/files");
};
const uploadGallery = (file) => {
  return http.post(process.env.REACT_APP_API_URL+"/gallery", file, {
    headers: {
      "Content-Type": "application/json",
      "x-access-token" : getAuthToken()
    }
  });
};
const FileUploadService = {
  upload,
  getFiles,
  uploadGallery
};

export default FileUploadService;