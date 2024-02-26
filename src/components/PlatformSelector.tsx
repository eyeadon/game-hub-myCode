import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatformById from "../hooks/usePlatformById";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

// interface Props {
//   selectedPlatformId?: number;
//   onSelectPlatform: (platform: Platform) => void;
// }

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const setSelectedPlatformId = useGameQueryStore(
    (state) => state.setPlatformId
  );

  const selectedPlatformId = useGameQueryStore(
    (state) => state.gameQuery.platformId
  );
  const selectedPlatform = usePlatformById(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
