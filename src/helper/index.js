import axios from "axios";
const baseURL = "https://fakestoreapi.com";

export const loginUser = async (data) => {
  const config = {
    method: "POST",
    url: `${baseURL}/auth/login`,
    data: data,
  };

  try {
    const result = await axios(config);
    if (result && result?.data) {
      return result.data;
    }
  } catch (error) {
    console.log("Login error:", error);
  }
};

export const getItem = async () => {
    const config = {
        method: "GET",
        url: `${baseURL}/products`,
      };
    
      try {
        const result = await axios(config);
        if (result && result?.data) {
          return result.data;
        }
      } catch (error) {
        console.log("Login error:", error);
      }
};

// export const getProdcuts=async(data)=>{
//     const config={
//         method:"GET",
//         url:`${baseURL}/auth/login?email=${data.email}`,
//         headers:{
//             "Content-Type":"",
//             "Authrization-Token":""
//         },
//         data:data
//     }

//     try {
//         const result=await axios(config);
//         if(result && result?.data){
//             return result.data;
//         }
//     } catch (error) {
//         console.log("Login error:",error)
//     }
// }
