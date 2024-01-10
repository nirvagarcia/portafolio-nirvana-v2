import React, { useState } from "react";
import { TextField, createTheme, Modal, IconButton, ThemeProvider} from "@mui/material";
import "../styles/Contact.css";
import emailjs from "emailjs-com";
import CloseIcon from "@mui/icons-material/Close";
import SectionEffect from "../auxiliars/SectionEffect";
import { useTheme } from "../auxiliars/ThemeContext";


const Contact = () => {
    const { darkMode } = useTheme();
    const theme = createTheme({
        palette: {
        mode: darkMode ? 'dark' : 'light',
        },
    });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        emailError: false,
    });

    const [showNotification, setShowNotification] = useState(false);

    const handleChange = (event) => {
        const { id, value } = event.target;

        if (id === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValidEmail = emailRegex.test(value);
            setFormData((prevData) => ({ ...prevData, [id]: value, emailError: !isValidEmail }));
        } else {
            setFormData((prevData) => ({ ...prevData, [id]: value }));
        }
    };

    const clearForm = () => {
        setFormData({
            name: "",
            email: "",
            message: "",
            emailError: false,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (formData.emailError) {
            return;
        }

        const serviceId = "service_hdbkc1f";
        const templateId = "template_g3um7zo";
        const apiKey  = "EwSLU0vhgjhRMLgY2";
    
        emailjs.send(serviceId, templateId, formData, apiKey)
            .then((response) => {
                console.log("Email send success:", response);
                clearForm();
                setShowNotification(true);
            })
            .catch((error) => {
                console.error("Email send fail:", error);
            });
    };

    return (
        <SectionEffect>
            <div id="contact">
                <div className="skills-title">Trying to Contact me?</div>


                <div className="contact-cards">
                    <a className="contact-card" href="mailto:nirvagarciav@gmail.com">
                        <div className="card-tittle">Email</div>
                        <div className="card-desc">nirvagarciav@gmail.com</div>
                        <img src="/assets/email.png" alt="Email" />
                    </a>
                    <a
                        className="contact-card"
                        href="https://wa.me/51986689120?text=Hola%20Nirvana!%20vine%20de%20tu%20portafolio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="card-tittle">WhatsApp</div>
                        <div className="card-desc">+51 986 689 120</div>
                        <img src="/assets/whatsapp.png" alt="WhatsApp" />
                    </a>
                    <a
                        className="contact-card"
                        href="https://www.linkedin.com/in/nirvana-garcia-vasquez"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="card-tittle">LinkedIn</div>
                        <div className="card-desc">Nirvana García</div>
                        <img src="/assets/linkedin.png" alt="LinkedIn" />
                    </a>
                </div>


                <div className="contact-container">
                
                
                    
                    <div className="contact-content">
                        <form onSubmit={handleSubmit}>
                            <ThemeProvider theme={theme}>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                onChange={handleChange}
                                value={formData.name}
                                sx={{
                                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                      borderColor: 'var(--title)',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                      color: 'var(--title)',
                                    },
                                    '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active': {
                                      boxShadow: '0 0 0 30px var(--background) inset !important',
                                      WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                      '&:-webkit-autofill': {
                                        WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                      },
                                      '&:-webkit-autofill:hover': {
                                        WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                      },
                                      '&:-webkit-autofill:focus': {
                                        WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                      },
                                      '&:-webkit-autofill:active': {
                                        WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                      },
                                    },
                                  }}
                                />

                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange}
                                    value={formData.email}
                                    error={formData.emailError}
                                    helperText={(formData.emailError && "Enter a valid email") || ""}
                                    sx={{
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                          borderColor: 'var(--title)',
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                          color: 'var(--title)',
                                        },
                                        '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active': {
                                          boxShadow: '0 0 0 30px var(--background) inset !important',
                                          WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                          '&:-webkit-autofill': {
                                            WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                          },
                                          '&:-webkit-autofill:hover': {
                                            WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                          },
                                          '&:-webkit-autofill:focus': {
                                            WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                          },
                                          '&:-webkit-autofill:active': {
                                            WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                          },
                                        },
                                      }}
                                />
                                <TextField
                                    id="message"
                                    label="Your Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange}
                                    value={formData.message}
                                    sx={{
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                          borderColor: 'var(--title)',
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                          color: 'var(--title)',
                                        },
                                        '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active': {
                                          boxShadow: '0 0 0 30px var(--background) inset !important',
                                          WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                          '&:-webkit-autofill': {
                                            WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                          },
                                          '&:-webkit-autofill:hover': {
                                            WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                          },
                                          '&:-webkit-autofill:focus': {
                                            WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                          },
                                          '&:-webkit-autofill:active': {
                                            WebkitBoxShadow: '0 0 0 30px var(--background) inset !important',
                                          },
                                        },
                                      }}
                                />
                            </ThemeProvider>
                            <button
                                type="submit"
                                className="button"
                                disabled={!formData.name || !formData.email || !formData.message || formData.emailError}
                            >
                                Send
                            </button>
                        </form>
                    </div>                
                </div>        
                <Modal
                    open={showNotification}
                    onClose={() => setShowNotification(false)}
                    aria-labelledby="notification-modal-title"
                    aria-describedby="notification-modal-description"
                >
                    <div className="notification-modal-container">
                        <div className="notification-modal" style={{ paddingBottom: '30px' }}>
                            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start", height:'20px' }} >
                                <IconButton
                                    edge="end"
                                    color="inherit"
                                    onClick={() => setShowNotification(false)}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </div>
                            <h2 id="notification-modal-title">Envío satisfactorio</h2>
                            <p id="notification-modal-description">Tu correo se ha enviado a nirvagarciav@gmail.com</p>
                        </div>
                    </div>
                </Modal>
            
            </div>
        </SectionEffect>
     
    );
};

export default Contact;