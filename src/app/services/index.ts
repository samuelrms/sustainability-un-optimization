import axios from "axios";

export const url = axios.create({
  baseURL: "https://api-for-un-project.herokuapp.com",
});
