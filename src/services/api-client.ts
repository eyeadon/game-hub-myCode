import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d3da0a5c41f84d899720ab939875da2e",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // *this* issue with callbacks, could do the following in constructor
  // if it's a regular function:
  // this.getAll = this.getAll.bind(this);

  //  returns response object
  // arrow functions do not have their own this context
  getAll = (config: AxiosRequestConfig) => {
    return (
      axiosInstance
        // config is for passing config object of query string params to back end
        // config is optional in get
        .get<FetchResponse<T>>(this.endpoint, config)
        .then((res) => res.data)
    );
  };

  // get single object
  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance
      .post<FetchResponse<T>>(this.endpoint, data)
      .then((res) => res.data);
  };
}

export default APIClient;
