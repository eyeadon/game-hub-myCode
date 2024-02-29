import { useLocation, useParams, useSearchParams } from "react-router-dom";

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

  return <p>Game detail page</p>;
};

export default GameDetailPage;
