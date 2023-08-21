import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {TextField} from "@mui/material";
import {useEffect, useState} from "react";
import ProductService from "../service/ProductService";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Product = ()=>{

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        ProductService.getProducts().then(res=>{
            setProducts(res.data);
        })
    })



    // const navigate = useNavigate();
    //
    // const handleButtonClick = () => {
    //     navigate ('/view-product');
    // };


    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 0,
                    }}
                >
                    <Container maxWidth="xl" sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Typography
                            component="h2"
                            variant="h3"
                            align="left"
                            color="text.primary"
                            gutterBottom
                        >
                            Product List
                        </Typography>
                        {/* Search Bar */}
                        <Box sx={{ flexGrow: 5 }} />
                        <TextField
                            id="search"
                            label="Search"
                            variant="outlined"
                            sx={{ width: '30%', mr: 2 }}
                        />

                        {/* Button */}
                        <Button variant="contained" color="primary" sx={{ mr: 2 }} size="medium">
                            Search
                        </Button>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="xl">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {products.map((product) => (
                            <Grid item key={product} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random?wallpapers"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {product.name}
                                        </Typography>
                                        <Typography>
                                            {product.quantity}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}

export default Product;