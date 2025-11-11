// src/components/ChatWidget.js

import React, { useState } from 'react';
import { Fab, Box, Paper, IconButton, Typography } from '@mui/material';
import { Chat as ChatIcon, Close as CloseIcon, Send as SendIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const widgetVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, delay: 0.5 } }
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Box provides fixed positioning
    <Box 
      sx={{
        position: 'fixed',
        bottom: 32, 
        right: 32, 
        zIndex: 1500, 
      }}
    >
      {/* 1. The Chat Interface (when open) */}
      {isOpen && (
        <Paper 
          component={motion.div}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          sx={{ 
            width: 320, 
            height: 400, 
            mb: 2, 
            borderRadius: 2, 
            boxShadow: 5, 
            display: 'flex', 
            flexDirection: 'column'
          }}
        >
          {/* Chat Header */}
          <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              NYC Insight Support
            </Typography>
          </Box>
          
          {/* Chat Body Placeholder */}
          <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto' }}>
            <Typography variant="body2" color="text.secondary">
              Hi there! How can I help you find the latest NYC information?
            </Typography>
            {/* ... Chat messages would go here ... */}
          </Box>

          {/* Chat Input */}
          <Box sx={{ p: 1, display: 'flex', borderTop: '1px solid #eee' }}>
            <input 
              placeholder="Type your message..." 
              style={{ flexGrow: 1, border: 'none', padding: '8px', fontSize: '1rem' }}
            />
            <IconButton color="primary" disabled>
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      )}

      {/* 2. The Floating Action Button (FAB) Toggle */}
      <Fab 
        color="primary" 
        aria-label="chat" 
        onClick={handleToggle}
        component={motion.button}
        variants={widgetVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Toggle between ChatIcon and CloseIcon */}
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </Fab>
    </Box>
  );
};

export default ChatWidget;