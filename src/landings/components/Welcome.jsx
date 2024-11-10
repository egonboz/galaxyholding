import { Box, Button, Container, Typography } from "@mui/material";

export const Welcome = ({ data }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${data.Welcome.backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          {data.Welcome.enterpriseName}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {data.Welcome.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            alignSelf: { xs: "center", md: "start" },
            px: 5,
            mt: 2,
            background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), ${data.Color.backgroundColor})`,
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
