import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  // hooks to get info about current route
  const params = useParams();
  // console.log(params);

  // (query string params, function for updating them)
  // setSearchParams has side effect, call inside event handlers or effect
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.toString());
  // console.log(searchParams.get('name'));

  const location = useLocation();

  const { slug } = useParams();
  // ! = never null
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>;
    </>
  );
};

export default GameDetailPage;
