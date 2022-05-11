import axios from "axios";
const baseURL = "https://pdam.borneocorner.com/api";
const api = axios.create({
    baseURL,
    headers:{
      "X-Requested-With": "XMLHttpRequest",
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
});

export default api;