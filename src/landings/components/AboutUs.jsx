import { Box, Container, Grid, Typography } from "@mui/material";

export const AboutUs = ({ data }) => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={data.AboutUs.imageUrl}
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
                textAlign: "center",
              }}
              gutterBottom
            >
              ABOUT US
            </Typography>
            <Box
              sx={{
                width: "60px",
                height: "4px",
                background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), ${data.Color.backgroundColor})`,
                backdropFilter: "blur(10px)",
                margin: "0 auto",
                mb: 3,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="textSecondary"
              paragraph
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              {data.AboutUs.text}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
