import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    // if slug changes, react query will fetch another game
    queryKey: ["games", slug],
    // must include () =>, passing a parameter to .get, need to make it a callback
    // get single game object, this one has description_raw property
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
