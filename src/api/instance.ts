import  Cookie  from 'js-cookie';
import axios from "axios";

 var token = null;
const GetJwtCookie = () => {
    token = Cookie.get('token');
  };
  GetJwtCookie();
//   console.log(token);
  

export const axiosInstance = axios.create({
    baseURL: 'https://localhost:7072/api/',
    headers: {'Authorization': 'Bearer '+ token}
})