import usePlatforms from "./usePlatforms";

const usePlatformById = (id?: number) => {
  // usePlatforms does not accept undefined values -> (id?: number)
  // array
  const { data: platforms } = usePlatforms();

  return platforms?.results.find((p) => p.id === id);
};

export default usePlatformById;
