import axios from "axios";

export const postData = async (url, data) => {
  try {
    // const {authToken, sub_domain, warehouse_id} = getAllCookies()
    // const params = { warehouse_id}
    const response = await axios.post(
      `${"http://localhost:5000"}/${url}`,
      data,
      {
        // params,
        // headers:{
        //     "Authorization":authToken,
        //     "Sub-Domain":sub_domain,
        //     "Accept-Language":lang
        // }
      }
    );

    return response.data;
  } catch (err) {
    return {
      success: false,
      data: {},
      status: err?.response?.status,
      message: err?.response?.data?.error,
    };
  }
};


export const getData = async (
  url,
 
  
) => {
  try {
  

    const response = await axios.get(
      `${"http://localhost:5000"}/${url}`);
    return response;
  } catch (err) {
    return {
      success: false,
      data: [],
      status: err?.response?.status,
      message: err?.response?.data?.error,
    };
  }
};