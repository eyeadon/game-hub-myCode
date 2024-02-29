import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    // if slug changes, react query will fetch another game
    queryKey: ["games", slug],
    // must include () =>
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
