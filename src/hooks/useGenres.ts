import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// hiding endpoint details behind useGenres hook, not in GenreList
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
