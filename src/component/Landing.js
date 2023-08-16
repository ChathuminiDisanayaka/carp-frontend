import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import img1 from '../images/20.jpg';
// import img2 from '../images/21.png';
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";

const defaultTheme = createTheme();
const Landing = ()=> {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
            <Grid container spacing={4} maxWidth="xl" sx={{ mt: 2, display:'flex',ml:4,mb:2}}>
                <Grid item xs={12} sm={6}>
                    <Container sx={{ py: 8 }}>
                        <Typography variant="h3" component="h2" gutterBottom sx={{ fontFamily: 'Arial', color: '#FF5733' }}>
                            Welcome to the CARP!!!
                        </Typography>
                        <Typography paragraph sx={{ fontSize: '20px' }}>
                            Discover the artistry of our handcrafted wooden products. From
                            furniture to decor, we offer a wide range of high-quality wood
                            creations that bring warmth and elegance to your home.
                        </Typography>
                        <Button variant="contained" color="primary">
                            Explore Products
                        </Button>

                        {/*<Grid container spacing={4}>*/}
                        {/*    <Grid item xs={12} sm={6}>*/}
                        {/*        <Card>*/}
                        {/*            <CardContent>*/}
                        {/*                <Typography variant="h6" gutterBottom>*/}
                        {/*                    Timeless Designs*/}
                        {/*                </Typography>*/}
                        {/*                <Typography paragraph>*/}
                        {/*                    Our designs are inspired by nature and built to last,*/}
                        {/*                    creating timeless beauty for your space.*/}
                        {/*                </Typography>*/}
                        {/*                <Button variant="contained" color="primary">*/}
                        {/*                    Explore Products*/}
                        {/*                </Button>*/}
                        {/*            </CardContent>*/}
                        {/*        </Card>*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Carousel
                        autoPlay
                        interval={5000}
                        infiniteLoop
                        showThumbs={false}
                    >
                        <div>
                            <img src="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" alt="Wood Product 1" />
                        </div>
                        <div>
                            <img src="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" alt="Wood Product 2" />
                        </div>
                        {/* Add more carousel items as needed */}
                    </Carousel>
                </Grid>
            </Grid>
                <Container maxWidth="xl" sx={{ backgroundColor: '#f0f0f0', py: 8 }}>
                    <Typography variant="h4" component="h2" align="center" gutterBottom>
                        Wood Products
                    </Typography>
                    <Carousel
                        autoPlay
                        interval={5000}
                        infiniteLoop
                        showThumbs={false}
                    >
                    <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Wooden Furniture
                            </Typography>
                            <Typography paragraph>
                                Our handcrafted wooden furniture is designed for both style and comfort, adding elegance to any space.
                            </Typography>
                            <Button variant="contained" color="primary">
                                Learn More
                            </Button>
                        </CardContent>
                    </Card>
                    <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Wooden Decor
                            </Typography>
                            <Typography paragraph>
                                Discover our collection of wooden decor items that bring a natural and warm touch to your home.
                            </Typography>
                            <Button variant="contained" color="primary">
                                Explore Decor
                            </Button>
                        </CardContent>
                    </Card>
                    </Carousel>
                    {/* Add more content carousel items as needed */}
                </Container>
            </main>
        </ThemeProvider>
    );
}

export default Landing;
