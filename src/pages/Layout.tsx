import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
