import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
// import useData from "./useData";
import ms from "ms";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

interface PostQuery {
  pageSize: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    //                  like dependencies
    queryKey: ["games", gameQuery],
    // ***important
    // cannot just use apiClient.getAll becasue we need to pass a config object
    // to getAll (queryFn is a callback)
    // react query passes pageParam as part of larger object
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    keepPreviousData: true,
    // react query executes this fn first, then will pass object to query function above
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;
