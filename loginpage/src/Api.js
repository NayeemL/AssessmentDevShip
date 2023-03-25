import axios from "axios";

const API_URL = "http://localhost:4000/";

const Api = axios.create({
  baseURL: API_URL,
});

export default Api;