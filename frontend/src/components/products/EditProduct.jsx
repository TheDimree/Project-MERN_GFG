import { Container, Box, Typography, TextField, Button, Link, Alert } from '@mui/material'
import { useState, useEffect } from 'react'
import { getProductById, updateProduct } from '../services/ProductServices'
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {

  const [state, setState] = useState(null)  // either use {} or use fallback UI as I did.
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        let data = { ...response.data.product, image: "" }
        setState(data);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch product details.');
      });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }
  const handleImage = (event) => {
    console.log("Handling image")
    if (event.target.files.length > 0) {
      setState({ ...state, image: event.target.files[0] })
      console.log("Image updated: ", state.image)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle Submit")
    // console.log(state)

    if (state.image != '') {
      console.log("Image is selected.")
      if (state.image.type === 'image/jpeg' || state.image.type === 'image/jpg' || state.image.type === 'image/png' || state.image.type === 'image/gif' || state.image.type === 'image/webp') {
        let formData = new FormData();  // * FormData() is used when we send data with the attactments to the server.
        formData.append('name', state.name)
        formData.append('price', state.price)
        formData.append('category', state.category)
        formData.append('features', state.features)
        formData.append('image', state.image)
        formData.append('quantity', state.quantity)
        console.log("formData to be sent: ", formData)
        updateProduct(id, formData)
          .then(response => {
            if (response.data.success) {
              console.log("Updated Product: ", response.data.product)
              setSuccessMsg("Product updated successfully")
            } else {
              setSuccessMsg(response.data.success)
            }
            console.log(response.data)
          })
          .catch(err => console.log(err))

          navigate('/dashboard/products')

      } else {
        setError('Supports only jpeg | jpg | png | gif formats')
      }
    } else {
      let formData = { 
        name: state.name,
        price: state.price,
        category: state.category,
        features: state.features,
        quantity: state.quantity
      }
      // console.log("data sending:", state)

      // console.log("formData:"+JSON.stringify(formData))
      updateProduct(id, formData)
        .then(response => {
          if (response.data.success) {
            console.log("Response: ", response.data.product)
            setSuccessMsg("Product updated successfully")
          } else {
            setSuccessMsg(response.data.success)
          }
        })
        .catch(err => console.log(err))
        navigate('/dashboard/products')
    }
  }

  if (!state) return <div>Loading...</div>; // Or any placeholder while waiting for data because state is initialized as null.

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
          Edit this Product
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {successMsg && <Alert severity="success">{successMsg} </Alert>}
        <Box component="form" sx={{ mt: 1, alignItems: "center" }} onSubmit={handleSubmit}>
          <TextField margin="normal" id="name" label="Product name" name="name" autoComplete="name" autoFocus required fullWidth onChange={handleChange} value={state.name} />
          <TextField margin="normal" id="price" label="Product price" name="price" autoComplete="price" autoFocus required fullWidth onChange={handleChange} value={state.price} />
          <TextField margin="normal" id="category" label="Product category" name="category" autoComplete="category" autoFocus required fullWidth onChange={handleChange} value={state.category} />
          <TextField margin="normal" id="features" label="Add description" name="features" autoComplete="features" autoFocus required fullWidth onChange={handleChange} value={state.features} />
          <TextField margin="normal" id="image" type="file" label="" name="image" autoComplete="image" autoFocus fullWidth onChange={handleImage} /> {error}
          <TextField margin="normal" id="quantity" label="Enter quantity" name="quantity" autoComplete="quantity" autoFocus fullWidth onChange={handleChange} value={state.quantity} />
          <Button type="submit" fullWidth sx={{ mt: 3, mb: 2 }} variant="contained">Edit Product</Button>
        </Box>
      </Box>

    </Container>
  )
}

export default EditProduct