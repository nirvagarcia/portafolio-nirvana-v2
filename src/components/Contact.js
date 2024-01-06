import React from "react";
import { TextField } from "@mui/material";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <div className="contact-avatar">
          <img src="assets/avatar.png" alt="Avatar" />
        </div>
        <div className="contact-content">
          <div className="contact-title">Get in Touch!</div>
          <form>
            <TextField
              id="outlined-basic-name"
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              id="outlined-basic-email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              id="outlined-basic-message"
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;