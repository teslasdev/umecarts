import axios from "axios";

export const fetchAllSubCategories = async (dispatch , url) => {
   try {
     await axios
     .get(url)
     .then((res) => {
       // console.log("sub-categories responseeee", res.data);
       dispatch(
         res.data.data?.category
      );
     })
     .catch((err) => {
       console.log(err);
     });
   } catch(err) {
     console.log(err)
   }
};