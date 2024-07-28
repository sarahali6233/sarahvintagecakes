import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./NavBar.css";

const NavBar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography
          variant="h6"
          style={{ flexGrow: 1, fontFamily: "Playfair Display, serif" }}
        >
          Sarah Vintage Cakes
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/cakes">
          Cakes
        </Button>
        <Button color="inherit" component={Link} to="/gallery">
          Gallery
        </Button>
        <Button color="inherit" component={Link} to="/custom-order">
          Custom Order
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/testimonials">
          Testimonials
        </Button>
        <Button color="inherit" component={Link} to="/faq">
          FAQ
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
