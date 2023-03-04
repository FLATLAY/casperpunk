import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Header from "./layouts/header/Header";

function App() {
  return (
    <Box
      boxSize="border-box"
      maxW="100%"
      h="auto"
      minH="100vh"
      overflowX="hidden"
      border='1px solid blue'
    >
      <Box w="100%" h="auto">
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
