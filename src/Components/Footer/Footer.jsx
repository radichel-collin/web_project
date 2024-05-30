import React from 'react';
import { Container, Grid, Typography, Link,  } from '@mui/material';

function Footer() {
    return (
        <footer>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ padding: '2rem 0', backgroundColor: '#f8f8f8' }}>
          {/* Contact Info Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h2">Contact Us</Typography>
            <Typography variant="body2">123 Main Street</Typography>
            <Typography variant="body2">City, State, ZIP</Typography>
            <Typography variant="body2">Phone: (123) 456-7890</Typography>
            <Typography variant="body2">Email: info@example.com</Typography>
          </Grid>
          
          {/* Quick Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h2">Quick Links</Typography>
            <Link href="/about" color="inherit" underline="none">
              <Typography variant="body2">About Us</Typography>
            </Link>
            <Link href="/services" color="inherit" underline="none">
              <Typography variant="body2">Services</Typography>
            </Link>
            <Link href="/contact" color="inherit" underline="none">
              <Typography variant="body2">Contact</Typography>
            </Link>
            <Link href="/privacy" color="inherit" underline="none">
              <Typography variant="body2">Privacy Policy</Typography>
            </Link>
          </Grid>
          
          {/* Social Media Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h2">Follow Us</Typography>
            <Link href="https://www.facebook.com" color="inherit" underline="none">
              <Typography variant="body2">Facebook</Typography>
            </Link>
            <Link href="https://www.twitter.com" color="inherit" underline="none">
              <Typography variant="body2">Twitter</Typography>
            </Link>
            <Link href="https://www.instagram.com" color="inherit" underline="none">
              <Typography variant="body2">Instagram</Typography>
            </Link>
            <Link href="https://www.linkedin.com" color="inherit" underline="none">
              <Typography variant="body2">LinkedIn</Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;