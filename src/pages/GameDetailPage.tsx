import { Heading, Spinner } from "@chakra-ui/react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  // hooks to get info about current route
  const params = useParams();
  // console.log(params);

  // returns [search params -> key: value, function for updating them]
  // setSearchParams has side effect, call inside event handlers or effect
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.toString());
  // console.log(searchParams.get('name'));

  // returns a location object with properties of the current URL
  const location = useLocation();

  // grab slug from current route, ex: "the-witcher-3-wild-hunt"
  const { slug } = useParams();

  // ! = never null
  // get game with description_raw
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
