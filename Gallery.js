import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./Gallery.css";

const images = ["/images/cake1.jpg", "/images/cake2.jpg", "/images/cake3.jpg"];

const Gallery = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Gallery
      </Typography>
      <Box className="carousel-container">
        <Carousel>
          {images.map((image, index) => (
            <img
              src={image}
              alt={`Cake ${index + 1}`}
              key={index}
              className="carousel-image"
            />
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default Gallery;
