import { useEffect, useState } from "react";
// importing return value of api-client.ts, making variable name for it
// axios instance
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
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // cleanup function
    return () => controller.abort();

    // included an array of dependencies, without this requests are contstantly sent to backend
  }, []);

  return { games, error };
};

export default useGames;
