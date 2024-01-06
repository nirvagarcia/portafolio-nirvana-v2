import React from "react";
import { TextField, ThemeProvider, createTheme } from "@mui/material";
import "../styles/Contact.css";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
                    <ThemeProvider theme={darkTheme}>
                        <TextField
                            id="outlined-basic-name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            sx={{
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'white',
                            },
                            }}
                        />
                        <TextField
                            id="outlined-basic-email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            sx={{
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'white',
                            },
                            }}
                        />
                        <TextField
                            id="outlined-basic-message"
                            label="Your Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            sx={{
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'white',
                            },
                            }}
                        />
                    </ThemeProvider>
                    <a href="#/" className="button">
                        Send
                    </a>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;