import { Container, Box, Typography, TextField, Button, Link, Alert } from '@mui/material'
import { useState } from 'react'
import { addProduct } from '../services/ProductServices'

const AddProduct = () => {

  const [state, setState] = useState({ name: '', price: '', category: '', features: '', image: '', quantity: '' })
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }
  const handleImage = (event) => {
    if (event.target.files.length > 0) {
      setState({ ...state, image: event.target.files[0] })
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(state)
    if (state.image != '') {
      if (state.image.type === 'image/jpeg' || state.image.type === 'image/jpg' || state.image.type === 'image/png' || state.image.type === 'image/gif') {
        let formData = new FormData();  // * FormData() is used when we send data with the attactments to the server.
        formData.append('name', state.name)
        formData.append('price', state.price)
        formData.append('category', state.category)
        formData.append('features', state.features)
        formData.append('image', state.image)
        formData.append('quantity', state.quantity)
        console.log("formData to be sent: ", formData)
        // addProduct(formData)
          .then(response => {
            if(response.data.success) {
              console.log("success: ", response.data.success)
              setSuccessMsg(response.data.success)
            } else {
              setSuccessMsg(response.data.success)
            }
            console.log(response.data)
          })
          .catch(err => console.log(err))

      } else {
        setError('Supports only jpeg | jpg | png | gif formats')
      }
    } else {
      setError('Please select an image')
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: "30px"
      }}>
        <Typography component="h1" variant="h5">
          Add New Product
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {successMsg && <Alert severity="success">{error}</Alert>}
        <Box component="form" sx={{ mt: 1, alignItems: "center" }} onSubmit={handleSubmit}>
          <TextField margin="normal" id="name" label="Product name" name="name" autoComplete="name" autoFocus required fullWidth onChange={handleChange} />
          <TextField margin="normal" id="price" label="Product price" name="price" autoComplete="price" autoFocus required fullWidth onChange={handleChange} />
          <TextField margin="normal" id="category" label="Product category" name="category" autoComplete="category" autoFocus required fullWidth onChange={handleChange} />
          <TextField margin="normal" id="features" label="Add description" name="features" autoComplete="features" autoFocus required fullWidth onChange={handleChange} />
          <TextField margin="normal" id="image" type="file" label="" name="image" autoComplete="image" autoFocus required fullWidth onChange={handleImage} /> {error}
          <TextField margin="normal" id="quantity" label="Enter quantity" name="quantity" autoComplete="quantity" autoFocus required fullWidth onChange={handleChange} />
          <Button type="submit" fullWidth sx={{ mt: 3, mb: 2 }} variant="contained">Add Product</Button>
          {/* <Link href="/" sx={{ display: "block", textAlign: "center" }}>You've an account already?</Link> */}
        </Box>
      </Box>

    </Container>
  )
}

export default AddProduct