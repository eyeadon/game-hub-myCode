import { useEffect, useState } from "react";
// • importing return value of api-client.ts, making variable name for it "apiClient"
// • axios instance
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  // params
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      // DOM API: AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.
      const controller = new AbortController();

      setLoading(true);

      apiClient
        .get<FetchResponse<T>>(endpoint, {
          // AxiosRequestConfig<any>
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      // cleanup function
      return () => controller.abort();

      // included an array of dependencies, without this requests are contstantly sent to backend
      // [] -> fetch data only once, when the component is rendered
      // [deps] -> if any of these dependencies change, effect will rerun and fetch data from the server
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
