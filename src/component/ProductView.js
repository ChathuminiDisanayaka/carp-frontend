import React from 'react';
import { useParams } from 'react-router-dom'; // If using React Router
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function ProductView() {
    const { productId } = useParams(); // Assuming you're using React Router to extract the product ID from the URL

    // Sample product data (replace with your actual data)
    const product = {
        id: productId,
        title: 'Wood Chair',
        description: 'This is a beautiful wood chair.',
        imageUrl: 'https://source.unsplash.com/random?woodchair',
    };

    return (
        <Container sx={{ py: 8 }}>
            <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {product.title}
                    </Typography>
                    <Typography>{product.description}</Typography>
                </CardContent>
                <img src={product.imageUrl} alt={product.title} style={{ maxWidth: '100%' }} />
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Add to Cart
                </Button>
            </Card>
        </Container>
    );
}

export default ProductView;
