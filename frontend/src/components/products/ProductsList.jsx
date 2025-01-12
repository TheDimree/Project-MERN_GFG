import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { isAdmin, isLoggedIn } from '../services/AuthService';
import { deleteProduct } from '../services/ProductServices';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductsList({ products, setProducts }) {

    const [deleted, setDeleted] = useState(false)
    const navigate = useNavigate()

    const handleDelete = (id) => {
        if (window.confirm('Do you want to delete this product?')) {
            deleteProduct(id)
                .then((response) => {
                    if (response.data.success) {
                        setProducts(products.filter(product => product._id !== id)); // Adjusted for MongoDB `_id` field
                        setDeleted("Product deleted."); // Optional if you need to track success
                    } else {
                        console.error('Failed to delete product:', response.data.message);
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (<>
        <Grid container spacing={2}>
            {products?.map(product => (
                <Grid item xs={12} sm={6} md={4} key={product._id}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt={product.name}
                            height="140"
                            image={`http://localhost:8008/images/${product.image}`}  // poosible only because of express.use(static()) in server file
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {product.features}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {isLoggedIn && !isAdmin &&
                                <Button size="small">Add to Card</Button>}
                            {isLoggedIn && isAdmin &&
                                <>
                                    <Button size="small" onClick={() => navigate(`/dashboard/editproduct/${product._id}`)}>Edit</Button>
                                    <Button size="small" onClick={() => handleDelete(product._id)}>Delete</Button>
                                </>}
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </>)
}
