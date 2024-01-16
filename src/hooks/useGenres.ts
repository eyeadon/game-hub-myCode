import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// hiding endpoint details behind useGenres hook, not in GenreList
// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
