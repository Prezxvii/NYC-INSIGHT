import React from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Divider, 
  Link,
  Grid,
  Container
} from '@mui/material';

// Define a font stack to mimic the bold, high-impact logo style
const logoFontFamily = '"Helvetica Neue", Arial, sans-serif'; 

const SignUpPage = () => {
  return (
    <Box 
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8fafc', 
        py: 6,
      }}
    >
      <Container maxWidth="xs">
        {/* Main centered Paper Card */}
        <Paper 
          elevation={6} 
          sx={{ 
            p: { xs: 3, md: 4 },
            borderRadius: 3, 
            textAlign: 'center',
            backgroundColor: '#ffffff',
          }}
        >
          {/* Logo Placeholder - Applying logo styling */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 800, 
              color: '#333', 
              mb: 3,
              fontFamily: logoFontFamily, // Apply font stack
              letterSpacing: '2px', // Increase letter spacing
            }}
          >
            NYC INSIGHT
          </Typography>

          {/* Sign Up Header - Applying logo styling to the main heading */}
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 800, // Increased weight
              mb: 1,
              fontFamily: logoFontFamily, // Apply font stack
              letterSpacing: '0.5px', // Subtle letter spacing
            }}
          >
            Create Account 
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Join NYC Insight to personalize your dashboard.
          </Typography>

          {/* Social Login Button */}
          <Button 
            variant="outlined" 
            fullWidth 
            size="medium"
            sx={{ 
              mb: 2, 
              py: 1,
              borderColor: '#ccc', 
              color: '#333', 
              fontWeight: 600,
              '&:hover': {
                borderColor: '#999',
                backgroundColor: '#f5f5f5'
              }
            }}
            startIcon={
              <Box 
                component="img" 
                src="https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" 
                alt="Google G Logo" 
                sx={{ width: 16, height: 16 }}
              />
            }
          >
            Sign Up with Google
          </Button>

          {/* OR Divider */}
          <Divider sx={{ my: 2 }}>
            <Typography variant="caption" color="text.secondary">
              OR Sign Up with email
            </Typography>
          </Divider>

          {/* Form */}
          <Box component="form" noValidate autoComplete="off">
             <TextField
              margin="dense"
              required
              fullWidth
              label="Full Name"
              name="fullName"
              autoFocus
              variant="outlined"
              size="small"
              sx={{ mb: 1.5 }}
            />
            <TextField
              margin="dense"
              required
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
              variant="outlined"
              size="small"
              sx={{ mb: 1.5 }}
            />
            <TextField
              margin="dense"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="new-password"
              variant="outlined"
              size="small"
              sx={{ mb: 1.5 }}
            />
             <TextField
              margin="dense"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              autoComplete="new-password"
              variant="outlined"
              size="small"
            />
            
            {/* Main Sign Up Button (Black) */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="medium"
              sx={{ 
                mt: 3,
                py: 1,
                backgroundColor: '#000000',
                color: '#ffffff',
                '&:hover': { backgroundColor: '#333333' },
                fontWeight: 700,
                borderRadius: 2
              }}
            >
              Sign Up
            </Button>
          </Box>

          {/* Login Link */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2">
              Already have an account? <Link href="/login" variant="body2" underline="hover" sx={{ color: '#000000' }}>Login here</Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUpPage;