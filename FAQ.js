import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FAQ.css";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "You can place an order by visiting our custom order page and filling out the form.",
  },
  {
    question: "What flavors do you offer?",
    answer:
      "We offer a variety of flavors including vanilla, chocolate, red velvet, and lemon.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Yes, we offer delivery services within a 30-mile radius of our bakery.",
  },
];

const FAQ = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQ;
