// src/components/FAQSection.js

import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

// --- DUMMY FAQ DATA ---
const faqData = [
  { 
    id: 'panel1', 
    question: "What sources power the City Insight data?", 
    answer: "Our platform aggregates data from official NYC government APIs, reputable news organizations, and licensed hyperlocal data providers to ensure the highest fidelity and accuracy." 
  },
  { 
    id: 'panel2', 
    question: "How often are the news updates refreshed?", 
    answer: "Our 'Latest City Updates' section utilizes a real-time feed that is refreshed every few minutes. Major breaking news alerts are pushed instantly." 
  },
  { 
    id: 'panel3', 
    question: "Is there a mobile application for NYC Insight?", 
    answer: "We are currently developing a dedicated mobile application for both iOS and Android. Stay tuned for announcements on the sign-up page!" 
  },
];

// --- FRAMER MOTION VARIANTS ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } }
};

const FAQSection = () => {
  // State to manage which panel is expanded (controlled accordion)
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container 
      maxWidth="md" 
      sx={{ py: 6, mt: 4 }}
      component={motion.div}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Animate when the component scrolls into view
      viewport={{ once: true, amount: 0.1 }} 
    >
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 4, 
          fontWeight: 300, 
          textAlign: 'center' 
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Box sx={{ border: '1px solid #eee', borderRadius: 1 }}>
        {faqData.map((item) => (
          <MuiAccordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            elevation={0}
            sx={{ 
                borderBottom: item.id !== faqData[faqData.length - 1].id ? '1px solid #eee' : 'none' 
            }}
          >
            <MuiAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${item.id}-content`}
              id={`${item.id}-header`}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {item.question}
              </Typography>
            </MuiAccordionSummary>
            <MuiAccordionDetails>
              <Typography variant="body1" color="text.secondary">
                {item.answer}
              </Typography>
            </MuiAccordionDetails>
          </MuiAccordion>
        ))}
      </Box>
      
    </Container>
  );
};

export default FAQSection;