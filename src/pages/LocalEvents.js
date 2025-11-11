import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, ListItemIcon, Divider, Paper } from '@mui/material';
import { Event as EventIcon, LocationOn as LocationIcon, CalendarToday as CalendarIcon } from '@mui/icons-material';

// Dummy data for local events
const localEvents = [
  { id: 1, date: "Nov 25", title: "Holiday Tree Lighting Ceremony", location: "Rockefeller Center", time: "6:00 PM" },
  { id: 2, date: "Dec 3", title: "Community Volunteer Day Cleanup", location: "Prospect Park, Brooklyn", time: "9:00 AM" },
  { id: 3, date: "Dec 10", title: "Broadway Week Ticket Sale Starts", location: "Online", time: "10:00 AM" },
  { id: 4, date: "Dec 18", title: "Bronx Zoo Winter Lights Festival", location: "Bronx Zoo", time: "5:30 PM" },
];

const LocalEventsPage = () => {
  return (
    <Box sx={{ py: 8, minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
          <CalendarIcon sx={{ mr: 1, fontSize: 36 }} /> Upcoming Local Events
        </Typography>

        <Paper elevation={3}>
          <List>
            {localEvents.map((event, index) => (
              <React.Fragment key={event.id}>
                <ListItem alignItems="flex-start" sx={{ py: 2 }}>
                  <ListItemIcon sx={{ minWidth: 50 }}>
                    <Box 
                        sx={{ 
                            backgroundColor: 'primary.main', 
                            color: '#fff', 
                            p: 1, 
                            borderRadius: '4px',
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="body2" sx={{ lineHeight: 1 }}>{event.date.split(' ')[0]}</Typography>
                        <Typography variant="subtitle2" sx={{ lineHeight: 1 }}>{event.date.split(' ')[1]}</Typography>
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>{event.title}</Typography>
                    }
                    secondary={
                      <Box sx={{ mt: 0.5 }}>
                        <Typography component="span" variant="body2" color="text.primary" sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocationIcon sx={{ fontSize: 18, mr: 0.5 }} /> {event.location}
                        </Typography>
                        <Typography component="span" variant="body2" color="text.secondary" sx={{ ml: 3 }}>
                            {event.time}
                        </Typography>
                      </Box>
                    }
                  />
                  <ListItemIcon>
                     <EventIcon color="action" />
                  </ListItemIcon>
                </ListItem>
                {index < localEvents.length - 1 && <Divider component="li" />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Container>
    </Box>
  );
};

export default LocalEventsPage;