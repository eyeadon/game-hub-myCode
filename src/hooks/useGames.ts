import { GameQuery } from "../App";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  //                  weird design from API side
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    // query string parameter
    // gameQuery properties could be null
    {
      // params is a property of AxiosRequestConfig object
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    // dependencies
    [gameQuery]
  );

export default useGames;
