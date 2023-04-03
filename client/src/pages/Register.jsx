import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { registerRoute } from '../utils/APIRoutes';
import { toast } from "react-toastify"
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
const Register = (props) => {
  const navigate = useNavigate();
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  };

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
   if( handleValidation()){
    const {firstName,lastName,email,password,confirmPassword} = newUser;
    const {data} = await axios.post(registerRoute, {
        firstName,lastName,email,password,confirmPassword
    });
    console.log(data)
    if(data.status === false){
      toast.error(data.msg, toastOptions);
    } else {
        console.log(data);
      localStorage.setItem('chat-app-user', JSON.stringify(data.userFromDB));
    }
    navigate("/");
   };
  };

  useEffect(() => {
    if(localStorage.getItem('chat-app-user')) {
      navigate('/');
    }
  }, );
  const handleValidation = () =>{
    const {firstName,lastName,email,password,confirmPassword} = newUser;
    if(password!==confirmPassword){
      toast.error("Enter correct Confirm Password!", toastOptions);
      return false;
    } else if(firstName.length < 3){
      toast.error("First name must be atleast 3 characters.", toastOptions);
      return false;
    } else if(lastName.length < 3){
      toast.error("Last name must be atleast 3 characters.", toastOptions);
      return false;
    } else if(password.length < 4){
      toast.error("Password must be atleast 4 characters.", toastOptions);
      return false;
    } else  if(email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    }
    return true;
    }
 
  return (
    
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(e) =>
                        setNewUser({ ...newUser, [e.target.name]: e.target.value })
                      }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={(e) =>
                        setNewUser({ ...newUser, [e.target.name]: e.target.value })
                      }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) =>
                        setNewUser({ ...newUser, [e.target.name]: e.target.value })
                      }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) =>
                        setNewUser({ ...newUser, [e.target.name]: e.target.value })
                      }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="confirmPassword"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) =>
                        setNewUser({ ...newUser, [e.target.name]: e.target.value })
                      }
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
  );
};

export default Register;
