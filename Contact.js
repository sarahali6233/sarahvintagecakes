import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import "./Contact.css";

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <form className="contact-form">
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button className="button" type="submit">
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
