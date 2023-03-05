import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { useShop } from "./hooks/useShop/useShop";
import { useProfile } from "./hooks/useProfile/useProfile";
import { useCart } from "./hooks/useCart/useCart";

import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

function App() {

  const { updateShopData } = useShop();
  const { profile } = useProfile();
  const { updateCart } = useCart();

  const checkCart = () => {
    if (profile) updateCart();
  };

  useEffect(() => {
    checkCart();
  }, [profile]);

  useEffect(() => {
    updateShopData();
  }, []);

  return (
    <Box
      boxSize="border-box"
      maxW="100%"
      h="auto"
      minH="100vh"
      overflowX="hidden"
    >
      <Header />
      <Box w="100%" h="auto" minH="calc(100vh - 200px)">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
