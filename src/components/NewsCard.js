// src/components/NewsCard.js
import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { PlayArrow as PlayArrowIcon } from '@mui/icons-material';

const NewsCard = ({ type = 'article', title, description, image, url, channel, videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      height: type === 'article' ? 500 : 320,
      border: '1px solid #eee',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
      textDecoration: 'none',
      color: 'inherit',
      transition: '0.3s',
      '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' }
    }}>
      {/* Image or video */}
      <Box sx={{ position: 'relative', width: '100%', paddingTop: type === 'article' ? '36%' : '56.25%' }}>
        {type === 'article' ? (
          <CardMedia
            component="img"
            image={image || 'https://via.placeholder.com/400x250?text=No+Image'}
            alt={title}
            sx={{ objectFit: 'cover', position: 'absolute', top: 0, width: '100%', height: '100%' }}
          />
        ) : (
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            {isPlaying ? (
              <iframe
                width="100%"
                height="100%"
                src={embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
              />
            ) : (
              <Box
                onClick={() => setIsPlaying(true)}
                sx={{
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer',
                  backgroundImage: `url(${thumbnailUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box sx={{
                  color: 'white',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  borderRadius: '50%',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { backgroundColor: 'rgba(204,0,0,0.8)' }
                }}>
                  <PlayArrowIcon sx={{ fontSize: 40 }} />
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {type === 'article' && (
          <>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5, letterSpacing: 0.5 }}>
              10 NOV 2025 • NY REPORTER
            </Typography>
            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 700, lineHeight: 1.3, mt: 1 }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, mb: 2 }}>
              {description}
            </Typography>
          </>
        )}
        {type === 'video' && (
          <>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 1.3, mb: 0.5 }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {channel}
            </Typography>
          </>
        )}
      </CardContent>

      {type === 'article' && (
        <Box sx={{ p: 3, pt: 0 }}>
          <Button size="small" variant="text" color="primary" sx={{ fontWeight: 700 }}>
            READ MORE
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default NewsCard;
