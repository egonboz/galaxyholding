import { Box } from "@mui/material";
import { LandingAppBar } from "./components/LandingAppBar";
import { Welcome } from "./components/Welcome";
import { Features } from "./components/Features";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const Landing = () => {
  return (
    <Box>
      <LandingAppBar />
      <Box id="welcome">
        <Welcome />
      </Box>
      <Box id="features">
        <Features />
      </Box>
      <Box id="about-us">
        <AboutUs />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
};
