import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <Container>
      <Box className="hero">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          className="hero-title"
        >
          Welcome to Sarah Vintage Cakes
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          className="hero-subtitle"
        >
          Bringing Vintage Charm to Every Occasion
        </Typography>
        <Button className="button" component={Link} to="/custom-order">
          Order Your Custom Cake
        </Button>
      </Box>
      <Box className="features">
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          className="features-title"
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className="features-description"
        >
          We offer a wide range of cakes for weddings, birthdays, anniversaries,
          and other special occasions. Each cake is crafted with love and
          attention to detail to ensure it meets your expectations.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
