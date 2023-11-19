import http from "../../http-common";
import { getAuthToken } from "../axiosConfig";

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("files", file);

  return http.post("/api/upload", formData, {
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
  return http.post("/api/gallery", file, {
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