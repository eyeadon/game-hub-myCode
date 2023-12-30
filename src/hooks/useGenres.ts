import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // DOM API: AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.
    const controller = new AbortController();

    setLoading(true);

    apiClient
      //                       endpoint
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
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
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
