import React from 'react';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const footers = [
  {
      title: 'Get to Know Us',
      description: ['Careers', 'Blog', 'About Amazon', 'Investor Relations', 'Amazon Devices','Amazon Science'],
  },
  {
      title: 'Make Money with Us',
      description: [
      'Sell products on Amazon',
      'Sell on Amazon Business',
      'Sell apps on Amazon',
      'Become an Affiliate',
      'Advertise Your Products',
      'Self-Publish with Us',
      'Host an Amazon Hub',
      'See More Make Money with Us'
      ],
  },
  {
      title: 'Amazon Payment Products',
      description: ['Amazon Business Card', 'Shop with Points ', 'Reload Your Balance', 'Amazon Currency Converter'],
  },
  {
      title: 'Let Us Help You',
      description: ['Amazon and COVID-19', 'Your Account','Your Orders','Shipping Rates & Policies','Returns & Replacements','Manage Your Content and Devices','Amazon Assistant','Help'],
  },
];

const defaultTheme = createTheme();

function Footer() {
    return (<ThemeProvider theme={defaultTheme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <Container
        maxWidth={false}
        component="footer"
        sx={{
          bgcolor: '#232F3E',
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="#fff" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="#fff" underline="none">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
      </ThemeProvider> );
}

export default Footer;