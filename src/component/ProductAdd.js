import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ProductAdd = () => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        imageUrl: '',
        quantity:'',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform submission logic here
        console.log('Product submitted:', product);
        // Clear the form fields
        setProduct({
            title: '',
            description: '',
            imageUrl: '',
            quantity:'',
        });
    };

    return (
        <Container sx={{ py: 8 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Add Product
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="title"
                    label="Title"
                    value={product.title}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    name="description"
                    label="Description"
                    value={product.description}
                    onChange={handleInputChange}
                    multiline
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    name="imageUrl"
                    label="Image URL"
                    value={product.imageUrl}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    name="quantity"
                    label="Quantity"
                    value={product.quantity}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Product
                </Button>
            </form>
        </Container>
    );
}

export default ProductAdd;
