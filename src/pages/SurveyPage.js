// src/pages/SurveyPage.js

import React, { useState } from 'react';
import { Container, Typography, Box, Paper, TextField, MenuItem, Button, Select, FormControl, InputLabel } from '@mui/material';

// Define the survey questions/options
const SURVEY_OPTIONS = {
    rating: [1, 2, 3, 4, 5], // 1 = Poor, 5 = Excellent
    topic: [
        'Public Transit (MTA)', 
        'Sanitation & Recycling', 
        'Parks & Recreation', 
        'Affordable Housing',
        'Public Safety'
    ]
};

const SurveyPage = () => {
    const [formData, setFormData] = useState({
        topic: '',
        rating: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // This is where you would typically send the data to a backend API
        console.log('Survey Submitted:', formData); 
        
        // Reset form for next submission
        setFormData({
            topic: '',
            rating: '',
            comments: ''
        });
        alert('Thank you for your feedback!');
    };

    return (
        <Container maxWidth="sm" sx={{ py: 6 }}> {/* Reduced max width for better focus */}
            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, letterSpacing: -1 }}>
                    Citizen Feedback Survey
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
                    Share your insights to help improve city services and policy direction.
                </Typography>
            </Box>

            <Paper component="form" onSubmit={handleSubmit} sx={{ 
                p: { xs: 3, md: 5 }, 
                elevation: 1, // Reduced shadow for clean look
                border: '1px solid #eee', // Added border for clarity
                borderRadius: '12px'
            }}>
                
                {/* 1. Service Topic */}
                <Box sx={{ mb: 4 }}>
                    <FormControl fullWidth required>
                        <InputLabel id="topic-label">Select Service Topic</InputLabel>
                        <Select
                            labelId="topic-label"
                            name="topic"
                            value={formData.topic}
                            onChange={handleChange}
                            label="Select Service Topic"
                        >
                            {SURVEY_OPTIONS.topic.map((topic) => (
                                <MenuItem key={topic} value={topic}>
                                    {topic}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                {/* 2. Rating Selection */}
                <Box sx={{ mb: 4 }}>
                    <FormControl fullWidth required>
                        <InputLabel id="rating-label">Overall Satisfaction Rating (1-5)</InputLabel>
                        <Select
                            labelId="rating-label"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            label="Overall Satisfaction Rating (1-5)"
                        >
                            {SURVEY_OPTIONS.rating.map((rating) => (
                                <MenuItem key={rating} value={rating}>
                                    {rating} - {rating === 5 ? 'Excellent' : rating === 1 ? 'Poor' : 'Good'}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                {/* 3. Comments */}
                <Box sx={{ mb: 4 }}>
                    <TextField
                        fullWidth
                        label="Detailed Comments (Optional)"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        multiline
                        rows={5}
                        placeholder="Tell us what worked well or what needs improvement..."
                    />
                </Box>

                {/* 4. Submission Button */}
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    fullWidth
                    sx={{ py: 1.5, fontWeight: 700 }}
                >
                    Submit Feedback
                </Button>
            </Paper>
        </Container>
    );
};

export default SurveyPage;