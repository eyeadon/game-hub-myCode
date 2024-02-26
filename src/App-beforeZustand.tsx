// import {
//   Box,
//   Button,
//   Flex,
//   Grid,
//   GridItem,
//   HStack,
//   Show,
// } from "@chakra-ui/react";
// import NavBar from "./components/NavBar";
// import GameGrid from "./components/GameGrid";
// import GenreList from "./components/GenreList";
// import { Genre } from "./hooks/useGenres";
// import { useState } from "react";
// import PlatformSelector from "./components/PlatformSelector";
// import { Platform } from "./hooks/usePlatforms";
// import SortSelector from "./components/SortSelector";
// import GameHeading from "./components/GameHeading";

// // query object
// export interface GameQuery {
//   genreId?: number;
//   platformId?: number;
//   sortOrder: string;
//   searchText: string;
// }

// function App() {
//   // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
//   // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

//   const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

//   return (
//     <Grid
//       templateAreas={{
//         base: `"nav" "main"`,
//         lg: `"nav nav"
//              "aside main"`, //1024px
//       }}
//       templateColumns={{
//         base: "1fr",
//         lg: "200px 1fr",
//       }}
//     >
//       <GridItem area="nav">
//         <NavBar
//           onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
//         />
//       </GridItem>
//       <Show above="lg">
//         <GridItem area="aside" paddingX={5}>
//           <GenreList
//             selectedGenreId={gameQuery.genreId}
//             //                        causes rerender
//             onSelectGenre={(genre) =>
//               setGameQuery({ ...gameQuery, genreId: genre.id })
//             }
//           />
//         </GridItem>
//       </Show>
//       <GridItem area="main">
//         <Box paddingLeft={2}>
//           <GameHeading gameQuery={gameQuery} />
//           <Flex marginBottom={5}>
//             <Box marginRight={5}>
//               <PlatformSelector
//                 selectedPlatformId={gameQuery.platformId}
//                 onSelectPlatform={(platform) =>
//                   // spread existing gameQuery and add platform
//                   setGameQuery({ ...gameQuery, platformId: platform.id })
//                 }
//               />
//             </Box>
//             <SortSelector
//               sortOrder={gameQuery.sortOrder}
//               onSelectSortOrder={(sortOrder) =>
//                 setGameQuery({ ...gameQuery, sortOrder })
//               }
//             />
//           </Flex>
//         </Box>
//         <GameGrid gameQuery={gameQuery} />
//       </GridItem>
//     </Grid>
//   );
// }

export {};