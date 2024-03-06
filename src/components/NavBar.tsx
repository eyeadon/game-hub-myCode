import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit={"cover"} />
      </Link>
      {/* App passes function to NavBar, NavBar passes to SearchInput */}
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
