import { Container, Box, Typography, Avatar, TextField, Button, Link, Alert } from '@mui/material'
import LockOutlined from '@mui/icons-material/LockOutlined'
import { useState } from 'react'
import { signUpService } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {

  const [state, setState] = useState({ name: '', email: '', password: '', mobile: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signUpService(state)
      .then(response => {
        if (response.data.err) {
          setError(response.data.err)
          return
        }
        navigate("/")
      })
      .catch(err => console.log(err))
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
        <Avatar sx={{ m: 1, backgroundColor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <Box component="form" sx={{ mt: 1, alignItems: "center" }} onSubmit={handleSubmit}>
          <TextField margin="normal" id="name" label="Enter your name" name="name" autoComplete="name" autoFocus required fullWidth onChange={handleChange} />
          <TextField margin="normal" id="email" label="Email Address" name="email" autoComplete="email" autoFocus required fullWidth onChange={handleChange} />
          <TextField margin="normal" id="mobile" label="mobile number" name="mobile" autoComplete="mobile" autoFocus required fullWidth onChange={handleChange} />
          <TextField margin="normal" id="password" label="password" name="password" autoComplete="password" type="password" autoFocus required fullWidth onChange={handleChange} />
          <TextField margin="normal" id="role" label="role" name="role" autoComplete="role" autoFocus required fullWidth onChange={handleChange} />

          <Button type="submit" fullWidth sx={{ mt: 3, mb: 2 }} variant="contained">Sign up</Button>
          <Link href="/" sx={{ display: "block", textAlign: "center" }}>You've an account already?</Link>
        </Box>
      </Box>

    </Container>
  )
}

export default SignUp