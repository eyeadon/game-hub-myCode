import useGenres from "./useGenres";

const useGenreById = (id?: number) => {
  // useGenres does not accept undefined values -> (id?: number)
  // array
  const { data: genres } = useGenres();

  return genres?.results.find((g) => g.id === id);
};

export default useGenreById;
