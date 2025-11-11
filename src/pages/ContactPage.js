import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField, // Kept TextField
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Link,
  Paper, // Kept Paper
} from "@mui/material";
// Removed FormControl and FormLabel imports for cleaner use

import {
  ContactMail as ContactMailIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  HelpOutline as HelpOutlineIcon,
  // Removed LocationOn and WarningIcon
} from "@mui/icons-material";

const departmentalContacts = [
  {
    title: "Press & Media Inquiries",
    email: "media@cityhall.nyc",
    phone: "(212) 555-4000",
    description: "Urgent media and press requests.",
  },
  {
    title: "Public Records (FOIL)",
    email: "foil@cityhall.nyc",
    phone: "Web Application",
    description: "Freedom of Information Law requests.",
  },
  {
    title: "General Site Feedback",
    email: "feedback@cityinsight.nyc",
    phone: "Use form below",
    description: "Non-urgent comments or website issues.",
  },
];

const ContactPage = () => {
  return (
    <Box
      sx={{
        py: 10,
        background: "#f8fafc", // Solid clean background
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        
        {/* Header - Modernized Color and Typography */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: "#000000", // Black accent color
              mb: 1,
            }}
          >
            <ContactMailIcon sx={{ mr: 1, fontSize: 40 }} />
            Connect with City Insight
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Your feedback helps us improve our city services.
          </Typography>
        </Box>

        {/* Grid Layout - Centered for better single-column presentation */}
        <Grid container spacing={6} justifyContent="center">
          
          {/* Left - Modernized Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 4,
                p: 5,
                backgroundColor: "#ffffff",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.08)", // Slightly stronger shadow
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                gutterBottom
                sx={{ mb: 4, color: '#333' }}
              >
                Feedback / Inquiry Form
              </Typography>

              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                {/* Cleaned Text Fields: using 'label' instead of separate FormLabel */}
                <TextField
                  label="Full Name"
                  variant="outlined"
                  placeholder="Enter your full name"
                  fullWidth
                  required
                />
                
                <TextField
                  label="Email Address"
                  variant="outlined"
                  placeholder="you@example.com"
                  type="email"
                  fullWidth
                  required
                />

                <TextField
                  label="Subject"
                  variant="outlined"
                  placeholder="Subject or department"
                  fullWidth
                  required
                />

                <TextField
                  label="Experience Rating (Optional)"
                  variant="outlined"
                  placeholder="e.g. Excellent, Good, Fair, Poor"
                  fullWidth
                />

                <TextField
                  label="Message / Feedback"
                  variant="outlined"
                  multiline
                  rows={5}
                  placeholder="Describe your issue or feedback in detail..."
                  fullWidth
                  required
                />

                {/* Submit Button - High contrast black */}
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 2,
                    py: 1.3,
                    fontWeight: 700,
                    borderRadius: 2,
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    "&:hover": {
                      backgroundColor: '#333333',
                    },
                  }}
                >
                  Submit Feedback
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Right - Key Contacts (Modernized) */}
          <Grid item xs={12} md={6}>
            
            <Paper
              elevation={3}
              sx={{
                borderRadius: 4,
                mb: 4,
                p: 4, // Slightly increased padding
                backgroundColor: "#ffffff",
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 3,
                  color: "#333",
                }}
              >
                <HelpOutlineIcon sx={{ mr: 1, color: '#000000' }} />
                Key Contact Points
              </Typography>

              <List disablePadding>
                {departmentalContacts.map((contact, index) => (
                  <React.Fragment key={contact.title}>
                    <ListItem sx={{ px: 0, py: 2 }}>
                      <ListItemText
                        primary={
                          <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            sx={{ color: '#000000' }} // Black primary text
                          >
                            {contact.title}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ mb: 1 }}
                            >
                              {contact.description}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                gap: 3,
                                flexWrap: "wrap",
                                fontSize: '0.9rem'
                              }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                                <Link
                                  href={`mailto:${contact.email}`}
                                  underline="hover"
                                  color="text.primary"
                                  sx={{ fontWeight: 500 }}
                                >
                                  {contact.email}
                                </Link>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                  {contact.phone}
                                </Typography>
                              </Box>
                            </Box>
                          </>
                        }
                      />
                    </ListItem>
                    {index < departmentalContacts.length - 1 && (
                      <Divider light sx={{ my: 0.5 }} />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
            {/* The Emergency/Location Card was removed as requested */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;

