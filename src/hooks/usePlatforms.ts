// import useData from "./useData"; old way of querying was usData()
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    // queryFn: () =>
    //   apiClient
    //     .get<FetchResponse<Platform>>("/platforms/lists/parents")
    //     .then((res) => res.data),
    queryFn: apiClient.getAll,

    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
