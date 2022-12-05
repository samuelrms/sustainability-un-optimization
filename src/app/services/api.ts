import axios from "axios";

export const url = axios.create({
  baseURL: "https://stingray-app-by2w7.ondigitalocean.app",
  // baseURL: "http://localhost:8001",
});
