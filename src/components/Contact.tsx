import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import { TextField, Button, Grid, Divider, Fade } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { openSnackbar } from '../tools/Snackbar';
import { contactList } from '../constants/Constants';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [fadeIn, setFadeIn] = React.useState(false);
      
  useEffect(() => {
      setFadeIn(true);
  }, []);

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send('service_l7579jo', 'template_s6lrpzc', templateParams, "Em1WNrHloE9WzVmqm").then(
        (response: { status: any; text: any; }) => {
          openSnackbar('Message sent successfully!', 'success');
        },
        (error: any) => {
          openSnackbar('Failed to send message. error: ' + error, 'error');
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <Fade in={fadeIn} timeout={2500}>
    <div className='contact'>
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Grid container spacing={2} p={2} mt={2} mb={4} columns={{xs:4, sm:8, md:12}}>
              {Object.values(contactList).map((c, index) => {
                  const IconComponent = c.icon as React.FC<{ size?: number }>;
                  return (
                      <Grid
                          sx={{
                              width: {sm: '100%', md: '32%' },
                              transition: 'all 0.25s ease-in-out',
                              ":hover": {
                                  transform: 'scale(1.05)',
                                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                              },
                          }}>
                          <div className="contact_box" onClick={(e) => {
                              if (c.url) {
                                  window.location.href = c.url;
                                  e.preventDefault();
                              }
                          }}>
                              <IconComponent size={35}/>
                              <h3 className='font-bold' style={{paddingBottom: '10px'}}>
                                  {c.name}
                              </h3>
                              <Divider variant="middle" style={{marginBottom: '10px'}}/>
                              <h3 className='font-bold' >
                                 {c.content}        
                              </h3>
                          </div>
                      </Grid>
                  )
              })}
          </Grid>
          <form
            onSubmit={sendEmail}
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                name='name'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                name='email'
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              name='message'
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
    </Fade>
  );
}

export default Contact;