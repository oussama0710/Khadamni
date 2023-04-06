import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import axios from "axios";

export default function AddService() {
  const user = JSON.parse(localStorage.getItem("chat-app-user"));
  const id = user._id
  const navigate = useNavigate();

  const [serviceProvider,setServiceProvider ]= useState({
    // firstName:"",
    // lastName:"",
    // email:"",
    // password:"",
    // services:[],
    // avatarImage:""
    email:user.email, 
    firstName:user.firstName,
    lastName:user.lastName,
    password:user.password,
    avatarImage:user.avatarImage,
    services:user.services
  })
  const [newService, setNewService] = React.useState({
    category: "",
    title: "",
    description: "",
  });
  const handleChange = (event) => {
    setNewService({ ...newService, [event.target.name]: event.target.value });
    
  };

  const categories = [
    "Audio Visual",
    "Graphic Designer",
    "Web/Mobile development",
    "SEO",
    "Social media",
    "Game developper",
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newService);
    console.log(user)
    // setServiceProvider({
      // email:user.email, 
      // firstName:user.firstName,
      // lastName:user.lastName,
      // password:user.password,
      // avatarImage:user.avatarImage,
      // services:user.services
    // })
    
    const service = serviceProvider.services
    console.log(service)
    service.push(newService)
    setServiceProvider({...serviceProvider, services:service});
    // setServiceProvider({...serviceProvider,services:[serviceProvider.services.shift()]});
    
    console.log(serviceProvider);
    
    await axios.put("http://localhost:8000/api/user/update/" + id,serviceProvider)
      .then((res) => {
        console.log(res);
        console.log("✅✅✅✅Client Success ✅✅✅✅", res.data);
      })
      .catch((err) => console.log(err));
      
  };
  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
        <Box sx={{ padding: 5 }}>
          <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
            Krunch Media
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Title
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="title"
                name="title"
                label="Title"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Description
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                name="description"
                multiline
                fullWidth
                rows={4}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Category
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={newService.category}
                  label="Category"
                  name="category"
                  onChange={handleChange}
                >
                  {categories.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700,
                                }}
                            >
                                Upload photos
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button>
                                <UploadFileIcon />
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} />
                        <Grid item xs={12} sm={5} />
                        <Grid item xs={12} sm={4}>
                            <button
                                variant="contained"
                                sx={{ color: "#ff781f" }}
                            >
                                Save
                            </button>
                        </Grid>
                        <Grid item xs={12} sm={5} />
                    </Grid>
                </Box>
            </Paper>
        </form>
    );
}
