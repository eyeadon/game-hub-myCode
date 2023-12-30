import { useEffect, useState } from "react";
// • importing return value of api-client.ts, making variable name for it
// • axios instance
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  //                  weird design from API side
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // DOM API: AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.
    const controller = new AbortController();

    apiClient
      //                       endpoint
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      // error handling from axios docs
      .catch(function (err) {
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          // our code
          setError(err.response);
        } else if (err.request) {
          // The request was made but no response was received
          // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(err.request);
          // our code
          setError(err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", err.message);
          // our code
          setError(err.message);
        }
        console.log(err.config);
      });

    // cleanup function
    return () => controller.abort();

    // included an array of dependencies, without this requests are contstantly sent to backend
  }, []);

  return { games, error };
};

export default useGames;
