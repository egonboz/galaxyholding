import { Box, Container, Grid, Typography } from "@mui/material";

export const AboutUs = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Imagen en blanco y negro */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://via.placeholder.com/500x300" // Cambia esta URL por la imagen que prefieras
              alt="About us"
              sx={{
                width: "100%",
                borderRadius: "8px",
                filter: "grayscale(100%)",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                },
              }}
            />
          </Grid>
          {/* Texto de la sección "About Us" */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center", // Centrado en móvil
              }}
              gutterBottom
            >
              ABOUT US
            </Typography>
            <Box
              sx={{
                width: "60px",
                height: "4px",
                background:
                  "linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(33, 150, 243, 0.7))",
                backdropFilter: "blur(10px)",
                margin: "0 auto", // Esto asegura que el Box esté centrado
                mb: 3,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="textSecondary"
              paragraph
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
