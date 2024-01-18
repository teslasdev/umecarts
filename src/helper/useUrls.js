import { getGlobalState } from "../components/common/store";

export const BASE_URL = process.env.REACT_APP_API_URL;
export const TOKEN_VALUE = "umecartsToken";

export function useUrls() {
  const categoryId = getGlobalState('categoryId')
  const slug = getGlobalState('slug')
  // Auth endpoints
  const loginUrl = `${BASE_URL}/auth/signin`;
  const registerUrl = `${BASE_URL}/auth/signup`;
  const getUserUrl = `${BASE_URL}/auth/getMe`;
  const getGalleryUrl = `${BASE_URL}/gallery`;
  const getCategoryUrl = `${BASE_URL}/category/${categoryId}`;
  const getBrandUrl = `${BASE_URL}/brand/${categoryId}`;
  const getTagUrl = `${BASE_URL}/product/tags`;
  const UploadProductUrl = `${BASE_URL}/product/`;
  const GetProductPublished = `${BASE_URL}/product/all`;
  const GetProductBySlug = `${BASE_URL}/product/slug/`;
  const uploadImage = `${BASE_URL}/upload`;
  const uploadGalleryImage = `${BASE_URL}/gallery`;
  const GetProduct = `${BASE_URL}/product/`;
  const updateStatus = `${BASE_URL}/product/status/`;
  const updateUser = `${BASE_URL}/update/me`;
  const getIpAddress = `${BASE_URL}/getIpAddress`;
  const addToCart = `${BASE_URL}/addToCart`;
  const getAddress =  `${BASE_URL}/address`;
  return {
    loginUrl, 
    registerUrl,
    getUserUrl,
    getGalleryUrl,
    getCategoryUrl,
    getBrandUrl,
    getTagUrl,
    UploadProductUrl,
    GetProductBySlug,
    uploadImage,
    uploadGalleryImage,
    GetProduct,
    updateStatus,
    updateUser,
    GetProductPublished,
    getIpAddress,
    addToCart,
    getAddress
  };
}
