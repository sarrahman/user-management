import axios from "axios";
axios.defaults.withCredentials = true;
const baseURL = "http://localhost:8000/api";
const api = axios.create({
    baseURL,
    headers:{
      "X-Requested-With": "XMLHttpRequest",
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
});

export default api;