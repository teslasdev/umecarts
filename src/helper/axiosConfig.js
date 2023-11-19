import axios from "axios";
import { BASE_URL } from "./useUrls";

export const setAuthToken = (token) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const getAuthToken = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    return localStorage.getItem("umecartsToken");
  }
};

export const getAuthorizationHeader = () => `Bearer ${getAuthToken()}`;

// Creating axios client, preconfigured with base url and other fields
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 150000,
  timeoutErrorMessage:
    "Your request timed out, please check your internet connection",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
    common: {
      Authorization: getAuthorizationHeader(),
    },
    "x-access-token" : getAuthToken()
  },
});

export const cancelTokenSource = axios.CancelToken.source();

// Intercept requests
axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = getAuthorizationHeader();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Intercept responses
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(error);
    });
  }
);

export default axiosInstance;
