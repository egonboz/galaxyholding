import { Box, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { FacebookOutlined } from "@mui/icons-material";

export const Footer = ({ data }) => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), ${data.Color.backgroundColor})`,
        backdropFilter: "blur(10px)",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          component="a"
          href={data.Footer.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 1 }}
        >
          <LinkedInIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          component="a"
          href={data.Footer.x}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 1 }}
        >
          <XIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          component="a"
          href={data.Footer.facebook}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 1 }}
        >
          <FacebookOutlined sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Typography sx={{ color: "white", mt: 1 }}>
        © 2024 {data.Footer.enterprise}. Design by EG
      </Typography>
    </Box>
  );
};
