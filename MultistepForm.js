import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Container,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import "./MultiStepForm.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      size: "",
      flavor: "",
      people: "",
      tiers: "",
      decor: "",
      colors: [],
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      size: Yup.string().required("Required"),
      flavor: Yup.string().required("Required"),
      people: Yup.number().required("Required").min(1, "Must be at least 1"),
      tiers: Yup.string().required("Required"),
      decor: Yup.string().required("Required"),
      colors: Yup.array().max(4, "You can select up to 4 colors"),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleColorChange = (color) => {
    const currentIndex = formik.values.colors.indexOf(color);
    const newChecked = [...formik.values.colors];

    if (currentIndex === -1) {
      newChecked.push(color);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    formik.setFieldValue("colors", newChecked);
  };

  const tierOptions = [
    { label: "One Tier", imgSrc: "/images/one-tier.jpg" },
    { label: "Two Tiers", imgSrc: "/images/two-tiers.jpg" },
    { label: "Three Tiers", imgSrc: "/images/three-tiers.jpg" },
  ];

  const decorOptions = [
    { label: "Simple", imgSrc: "/images/simple-decor.jpg" },
    { label: "Elegant", imgSrc: "/images/elegant-decor.jpg" },
    { label: "Extravagant", imgSrc: "/images/extravagant-decor.jpg" },
  ];

  const colorOptions = [
    "#FFB6C1", // Light Pink
    "#B0E0E6", // Powder Blue
    "#FFDAB9", // Peach Puff
    "#E6E6FA", // Lavender
    "#FFFACD", // Lemon Chiffon
    "#F5DEB3", // Wheat
    "#ADD8E6", // Light Blue
    "#98FB98", // Pale Green
    "#FFC0CB", // Pink
    "#FAFAD2", // Light Goldenrod Yellow
    "#DDA0DD", // Plum
    "#F0E68C", // Khaki
  ];

  return (
    <Container className="container" maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Custom Cake Order
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        {step === 1 && (
          <Box>
            <Typography variant="h6" component="h2" gutterBottom>
              Personal Information
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              id="name"
              name="name"
              label="What is your name?"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              margin="normal"
              id="email"
              name="email"
              label="What is your email?"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Button variant="contained" color="primary" onClick={nextStep}>
              Next
            </Button>
          </Box>
        )}
        {step === 2 && (
          <Box>
            <Typography variant="h6" component="h2" gutterBottom>
              Cake Details
            </Typography>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="size">What size do you want?</InputLabel>
              <Select
                id="size"
                name="size"
                value={formik.values.size}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.size && Boolean(formik.errors.size)}
              >
                <MenuItem value="">
                  <em>Select size</em>
                </MenuItem>
                <MenuItem value="small">Small</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="large">Large</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="flavor">What flavor do you want?</InputLabel>
              <Select
                id="flavor"
                name="flavor"
                value={formik.values.flavor}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.flavor && Boolean(formik.errors.flavor)}
              >
                <MenuItem value="">
                  <em>Select flavor</em>
                </MenuItem>
                <MenuItem value="vanilla">Vanilla</MenuItem>
                <MenuItem value="chocolate">Chocolate</MenuItem>
                <MenuItem value="red velvet">Red Velvet</MenuItem>
                <MenuItem value="lemon">Lemon</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              margin="normal"
              id="people"
              name="people"
              label="How many people is it for?"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.people}
              error={formik.touched.people && Boolean(formik.errors.people)}
              helperText={formik.touched.people && formik.errors.people}
            />
            <Button variant="contained" color="secondary" onClick={prevStep}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={nextStep}>
              Next
            </Button>
          </Box>
        )}
        {step === 3 && (
          <Box>
            <Typography variant="h6" component="h2" gutterBottom>
              Design Options
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Select the number of tiers:
            </Typography>
            <Grid container spacing={2}>
              {tierOptions.map((option, index) => (
                <Grid item xs={4} key={index}>
                  <div
                    className={`tier-option ${
                      formik.values.tiers === option.label ? "selected" : ""
                    }`}
                    onClick={() => formik.setFieldValue("tiers", option.label)}
                  >
                    <img
                      src={option.imgSrc}
                      alt={option.label}
                      className="tier-image"
                    />
                    <Typography variant="caption" component="p">
                      {option.label}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
            {formik.touched.tiers && formik.errors.tiers ? (
              <div className="error">{formik.errors.tiers}</div>
            ) : null}
            <Typography variant="subtitle1" gutterBottom>
              Select the decor style:
            </Typography>
            <Grid container spacing={2}>
              {decorOptions.map((option, index) => (
                <Grid item xs={4} key={index}>
                  <div
                    className={`decor-option ${
                      formik.values.decor === option.label ? "selected" : ""
                    }`}
                    onClick={() => formik.setFieldValue("decor", option.label)}
                  >
                    <img
                      src={option.imgSrc}
                      alt={option.label}
                      className="decor-image"
                    />
                    <Typography variant="caption" component="p">
                      {option.label}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
            {formik.touched.decor && formik.errors.decor ? (
              <div className="error">{formik.errors.decor}</div>
            ) : null}
            <Typography variant="subtitle1" gutterBottom>
              Select up to 4 colors:
            </Typography>
            <Grid container spacing={2}>
              {colorOptions.map((color, index) => (
                <Grid item xs={4} key={index}>
                  <div
                    className={`color-option ${
                      formik.values.colors.includes(color) ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(color)}
                  ></div>
                </Grid>
              ))}
            </Grid>
            {formik.touched.colors && formik.errors.colors ? (
              <div className="error">{formik.errors.colors}</div>
            ) : null}
            <Button variant="contained" color="secondary" onClick={prevStep}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={nextStep}>
              Next
            </Button>
          </Box>
        )}
        {step === 4 && (
          <Box>
            <Typography variant="h6" component="h2" gutterBottom>
              Additional Information
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              id="message"
              name="message"
              label="Any additional messages or instructions?"
              multiline
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <Button variant="contained" color="secondary" onClick={prevStep}>
              Back
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        )}
      </form>
    </Container>
  );
};

export default MultiStepForm;
