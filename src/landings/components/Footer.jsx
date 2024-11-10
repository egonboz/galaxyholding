import { Box, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FacebookOutlined } from "@mui/icons-material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column", // Coloca los elementos en una columna
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        background:
          "linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(33, 150, 243, 0.7))", // Gradiente espacial
        backdropFilter: "blur(10px)", // Efecto de desenfoque para la sensación de espacio
        position: "absolute",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          component="a"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 1 }}
        >
          <LinkedInIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 1 }}
        >
          <TwitterIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 1 }}
        >
          <FacebookOutlined sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Typography sx={{ color: "white", mt: 1 }}>
        © 2024 Enterprise. Design by EG
      </Typography>
    </Box>
  );
};
