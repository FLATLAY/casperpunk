import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

function App() {
  return (
    <Box
      boxSize="border-box"
      maxW="100%"
      h="auto"
      minH="100vh"
      overflowX="hidden"
    >
      <Header />
      <Box w="100%" h="auto" minH="calc(100vh-300px)">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
