import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

// hiding endpoint details behind useGenres hook, not in GenreList
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
