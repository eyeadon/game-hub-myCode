import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d3da0a5c41f84d899720ab939875da2e",
  },
});

// class APIClient<T> {
//   endpoint: string;

//   constructor(endpoint: string) {
//     this.endpoint = endpoint;
//   }

//   // this issue with callbacks, could do the following in constructor
//   // if it's a regular function:
//   // this.getAll = this.getAll.bind(this);

//   //  returns response object
//   // arrow functions do not have their own this context
//   getAll = () => {
//     return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
//   };

//   post = (data: T) => {
//     return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
//   };
// }

// export default APIClient;

export default axiosInstance;
