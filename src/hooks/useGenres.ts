import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

// hiding endpoint details behind useGenres hook, not in GenreList
// const useGenres = () => useData<Genre>("/genres");

// const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    // queryFn: () =>
    //   apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    queryFn: apiClient.getAll,

    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
