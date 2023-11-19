import http from "../../http-common";
import { getAuthToken } from "../axiosConfig";
import { useUrls } from "../useUrls";


const upload = (file, onUploadProgress) => {
  let formData = new FormData();
  const  { uploadImage } =  useUrls()
  formData.append("files", file);

  return http.post(uploadImage, formData, {
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
  const  { uploadGallery } =  useUrls()
  return http.post(uploadGallery, file, {
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