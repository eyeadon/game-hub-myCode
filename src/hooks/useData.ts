import { useEffect, useState } from "react";
// • importing return value of api-client.ts, making variable name for it "apiClient"
// • axios instance
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // DOM API: AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    // // error handling from axios docs
    // .catch(function (err) {
    //   if (err.response) {
    //     // The request was made and the server responded with a status code
    //     // that falls out of the range of 2xx
    //     console.log(err.response.data);
    //     console.log(err.response.status);
    //     console.log(err.response.headers);
    //     // our code
    //     setError(err.response);
    //     setLoading(false);
    //     // removed axios request code
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.log("Error", `"${err.message}"`);
    //     // our code
    //     setError(err.message);
    //     setLoading(false);
    //   }
    //   console.log(err.config);
    // });

    // cleanup function
    return () => controller.abort();

    // included an array of dependencies, without this requests are contstantly sent to backend
  }, []);

  return { data, error, isLoading };
};

export default useData;
