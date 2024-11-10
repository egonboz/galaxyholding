import { Box, Button, Container, Typography } from "@mui/material";

export const Welcome = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')`, // Cambia esta URL a la imagen de fondo que desees
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Enterprise
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            alignSelf: { xs: "center", md: "start" },
            px: 5,
            mt: 2,
            background:
              "linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(33, 150, 243, 0.7))",
            backdropFilter: "blur(10px)",
            borderRadius: 10,
            margin: 2,
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
          }}
        >
          LEARN MORE
        </Button>
      </Container>
    </Box>
  );
};
