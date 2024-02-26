import { Heading } from "@chakra-ui/react";
import usePlatformById from "../hooks/usePlatformById";
import useGenreById from "../hooks/useGenreById";
import useGameQueryStore from "../store";

// interface Props {
//   gameQuery: GameQuery;
// }

const GameHeading = () => {
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const genre = useGenreById(genreId);

  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const platform = usePlatformById(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
