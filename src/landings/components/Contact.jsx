import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

export const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          CONTACT
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
        <Box
          sx={{
            backgroundColor: "#f1f1f1",
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Please fill out the form below to send us an email and we will get
            back to you as soon as possible.
          </Typography>
        </Box>
        <Card
          sx={{
            maxWidth: "100%",
            boxShadow: 3,
            borderRadius: 5,
            transition: "transform 0.3s",
            "&:hover": {
              transform: "translateY(-10px)",
            },
          }}
        >
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <TextField
                    id="message"
                    name="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
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
                    Send Message
                  </Button>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                <Typography variant="h6" gutterBottom>
                  Contact Info
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  <strong>Address</strong>
                  <br />
                  {data.Contact.address}
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  <strong>Phone</strong>
                  <br />
                  <a href="tel:+11234561234" style={{ color: "#6F6F6FFF" }}>
                    {data.Contact.phone}
                  </a>
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  <strong>Email</strong>
                  <br />
                  <a
                    href="mailto:correo@ejemplo.com"
                    style={{ color: "#6F6F6FFF" }}
                  >
                    {data.Contact.email}
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
