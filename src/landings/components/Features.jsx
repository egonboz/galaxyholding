import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CampaignIcon from "@mui/icons-material/Campaign";
import GroupIcon from "@mui/icons-material/Group";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

// Mapa de iconos de nombres a componentes JSX
const iconMap = {
  ChatIcon: <ChatIcon fontSize="large" />,
  CampaignIcon: <CampaignIcon fontSize="large" />,
  GroupIcon: <GroupIcon fontSize="large" />,
  AutoFixHighIcon: <AutoFixHighIcon fontSize="large" />,
};

export const Features = ({ data }) => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          FEATURES
        </Typography>
        <Box
          sx={{
            width: "60px",
            height: "4px",
            background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), ${data.Color.backgroundColor})`,
            backdropFilter: "blur(10px)",
            margin: "0 auto",
            mb: 6,
          }}
        ></Box>

        <Grid container spacing={4} justifyContent="center">
          {data.Features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: "10px",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto",
                    background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), ${data.Color.backgroundColor})`,
                    backdropFilter: "blur(10px)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    mb: 2,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {iconMap[feature.icon]}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
