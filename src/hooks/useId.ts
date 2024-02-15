// import usePlatforms from "./usePlatforms";

// const usePlatformById = (id?: number) => {
//   const { data: platforms } = usePlatforms();
//   return platforms?.results.find((p) => p.id === id);
// };

// export default usePlatformById;

const useId = (id?: number, func: (func: () => data) => data) => {
  const { data } = func();
  const results = data?.results;
  return results.find((p) => p.id === id);
};

export default useId;
