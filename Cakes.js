import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import "./Cakes.css";

const cakeCategories = [
  { title: "Wedding Cakes", imgSrc: "/images/wedding-cakes.jpg" },
  { title: "Birthday Cakes", imgSrc: "/images/birthday-cakes.jpg" },
  { title: "Anniversary Cakes", imgSrc: "/images/anniversary-cakes.jpg" },
];

const Cakes = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Cakes
      </Typography>
      <Grid container spacing={3}>
        {cakeCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="card">
              <CardMedia
                component="img"
                alt={category.title}
                height="140"
                image={category.imgSrc}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {category.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cakes;
