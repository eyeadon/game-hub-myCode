import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/api-client";
// import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  //                  weird design from API side
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

interface PostQuery {
  pageSize: number;
}

const apiClient = new APIClient<Game>("/games");

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     // query string parameter
//     // gameQuery properties could be null
//     {
//       // params is a property of AxiosRequestConfig object
//       params: {
//         genres: gameQuery.genre?.id,
//         parent_platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     },
//     // dependencies
//     [gameQuery]
//   );

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    //                  like dependencies
    queryKey: ["games", gameQuery],
    // queryFn: () =>
    //   apiClient
    //     .get<FetchResponse<Game>>("/games", {
    //       // request config object, for passing query string params to back end
    //       params: {
    //         genres: gameQuery.genre?.id,
    //         parent_platforms: gameQuery.platform?.id,
    //         ordering: gameQuery.sortOrder,
    //         search: gameQuery.searchText,
    //       },
    //     })
    //     .then((res) => res.data),

    // cannot just use apiClient.getAll becasue we need to pass a config object
    // to getAll (queryFn is a callback)
    // react query passes pageParam as part of larger object
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
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
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useGames;
