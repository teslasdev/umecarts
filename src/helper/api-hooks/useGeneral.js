import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";
import { TOKEN_VALUE, useUrls } from "../useUrls";

export const useGallery = () => {
   const { getGalleryUrl } = useUrls();
   const { data, isLoading, refetch } = useQuery(["gallery"], ({ signal }) =>
      axiosInstance
      .get(getGalleryUrl, { signal })
      .then((res) => res.data.data)
   );
   return { data, isLoading, refetch };
};


export const useCategory = () => {
   const { getCategoryUrl } = useUrls();
   const { data, isLoading, refetch } = useQuery(["category"], ({ signal }) =>
      axiosInstance
      .get(getCategoryUrl, { signal })
      .then((res) => res.data.data)
   );
   return { data, isLoading, refetch };
};

export const useBrand = () => {
   const { getBrandUrl } = useUrls();
   const { data, isLoading ,refetch} = useQuery(["brand"], ({ signal }) =>
      axiosInstance
      .get(getBrandUrl, { signal })
      .then((res) => res.data.data)
   );
   
   return { data, isLoading, refetch };
};

export const useTags = () => {
   const { getTagUrl } = useUrls();
   const { data, isLoading } = useQuery(["tags"], ({ signal }) =>
      axiosInstance
      .get(getTagUrl, { signal })
      .then((res) => res.data.data)
   );
   const fetch = data;
   const isFetching = isLoading;
   return { fetch, isFetching };
};