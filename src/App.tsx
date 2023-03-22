import { useEffect } from "react";
import { Outlet ,useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";


import { useShop } from "./hooks/useShop/useShop";
import { useProfile } from "./hooks/useProfile/useProfile";
import { useCart } from "./hooks/useCart/useCart";


import Navbar from "./layouts/navbar/Navbar";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Event from "./layouts/Event/Event";
// install again
function App() {

  const { updateShopData } = useShop();
  const { profile } = useProfile();
  const { updateCart } = useCart();
  const location = useLocation();

  const checkCart = () => {
    if (profile) updateCart();
  };

  useEffect(() => {
    checkCart();
  }, [profile]);

  useEffect(() => {
    updateShopData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <Box
      boxSize="border-box"
      maxW="100%"
      h="auto"
      minH="100vh"
      overflowX="hidden"
    >
      <Navbar />
      <Event />
      <Header />
      <Box w="100%" h="auto" minH="calc(100vh - 400px)" bg='#F9F9F6' >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
