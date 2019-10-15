import axios from "axios";

const httpService = axios.create({
  baseURL: "http://localhost:44320/api"
});

export default httpService;
