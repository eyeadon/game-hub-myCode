import axios from "axios";

// axios instance created
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d3da0a5c41f84d899720ab939875da2e",
  },
});
