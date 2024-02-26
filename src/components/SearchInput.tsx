import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  // causes rerender, dependent on game query store
  // use selector instead
  const setSearchText = useGameQueryStore((state) => state.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        // prevent event from being posted to server
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
