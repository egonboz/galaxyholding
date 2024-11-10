import { Box } from "@mui/material";
import { LandingAppBar } from "./components/LandingAppBar";
import { Welcome } from "./components/Welcome";
import { Features } from "./components/Features";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const Landing = ({ data }) => {
  return (
    <Box>
      <LandingAppBar data={data} />
      <Box id="welcome">
        <Welcome data={data} />
      </Box>
      <Box id="features">
        <Features data={data} />
      </Box>
      <Box id="about-us">
        <AboutUs data={data} />
      </Box>
      <Box id="contact">
        <Contact data={data} />
      </Box>
      <Footer data={data} />
    </Box>
  );
};
