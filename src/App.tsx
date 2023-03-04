import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";


function App() {
  return (
    <Box
    boxSize="border-box"
    maxW="100%"
    h="auto"
    minH="100vh"
    overflowX="hidden"
  >
    <Outlet />
  </Box>
  );
}

export default App;
