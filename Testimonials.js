import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

const testimonials = [
  {
    name: "Jane Doe",
    text: "The cake for my wedding was absolutely stunning and delicious! Sarah Vintage Cakes exceeded my expectations in every way. The attention to detail and the beautiful vintage design made our day even more special.",
  },
  {
    name: "John Smith",
    text: "I ordered a custom birthday cake for my daughter, and it was a huge hit! The flavors were amazing, and the decoration was exactly what I envisioned. Highly recommend Sarah Vintage Cakes for any special occasion.",
  },
  {
    name: "Emily Johnson",
    text: "Sarah Vintage Cakes created a gorgeous and tasty cake for our anniversary. The team was so easy to work with, and they truly brought our ideas to life. We received so many compliments from our guests.",
  },
];

const Testimonials = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Testimonials
      </Typography>
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="card">
          <CardContent>
            <Typography variant="h6" component="h2">
              {testimonial.name}
            </Typography>
            <Typography variant="body1" component="p">
              {testimonial.text}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Testimonials;
