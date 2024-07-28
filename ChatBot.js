import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am here to help you choose the perfect cake. What is the occasion?",
    },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (userInput.trim()) {
      const newMessages = [...messages, { sender: "user", text: userInput }];
      setMessages(newMessages);
      setUserInput("");
      // Simulate a bot response
      setTimeout(() => {
        setMessages([
          ...newMessages,
          {
            sender: "bot",
            text: "Great! Let me suggest some options for you.",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <Box className="chat-bot">
      <Typography variant="h6" component="h2" gutterBottom>
        Cake Suggestion Bot
      </Typography>
      <Box className="messages">
        {messages.map((message, index) => (
          <Box key={index} className={`message ${message.sender}`}>
            <Typography variant="body2">{message.text}</Typography>
          </Box>
        ))}
      </Box>
      <Box className="input-area">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBot;
