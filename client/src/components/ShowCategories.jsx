import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";

const ShowCategories = () => {
//   const currentUser = JSON.parse(localStorage.getItem("chat-app-user"));
const navigate = useNavigate();
const [services, setServices] = useState([]);
const { category } = useParams();
useEffect(() => {
  axios
    .get(`http://localhost:8000/api/services/category/${category}`)
    .then((res) => {
      console.log(res.data);
      setServices(res.data);
    })
    .catch((err) => {
      console.log("❌❌", err);
    });
}, [category]);
return (
<div>
  {JSON.stringify(services)}
{services.map((oneService,index) => {
  <Card key={index} sx={{ maxWidth: 345 }}>
    {/* <CardMedia
      sx={{ height: 140 }}
      image={oneService.photos}
      title="green iguana"
    /> */}
    <p key={index} >{oneService.category}</p>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {oneService.category}
      </Typography>
      
      <Typography gutterBottom variant="h5" component="div">
        {oneService.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {oneService.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Edit</Button>
      <Button size="small">Delete</Button>
    </CardActions>
  </Card>
  
})}
</div>
)};

export default ShowCategories