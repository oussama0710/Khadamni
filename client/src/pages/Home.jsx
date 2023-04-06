import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, blue, yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Video from '../assets/Video1.mp4';
import '../HeroStyles.css'

const Home = () => {
    const navigate = useNavigate()
    
    return (
        <div style={{backgroundColor:'#e8eaf6', paddingTop:'64px', marginBottom:'40px'}}>
            <div className='hero'>
              <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
              </video>
              <div className="overlay"></div>
              <div className="content">
            </div>
        </div>
            
            <h1 style={{ paddingTop:'50px'}}>Services Categories</h1>
            <br />
            <br />
            <div className='ServicesCategories'>
                <div className='Service' >
                    <Link to={`/services`}><img src={require('../assets/005-video-player.png')} alt="" width="50" /><p>Audio-Visual</p>
                    </Link>
                </div>
                <div className='Service'>
                <Link to={`/services`}><img src={require('../assets/004-vector.png')} alt="" width="50" /><p>Graphic Design</p>
                    </Link>
                </div>
                <div className='Service'>
                <Link to={`/services`}><img src={require('../assets/002-code.png')} alt="" width="50" /><p>Web/Mobile Development</p>
                    </Link>
                </div>
                <div className='Service'>
                <Link to={`/services`}><img src={require('../assets/003-seo.png')} alt="" width="50" /><p>Seo</p>
                    </Link>
                </div>
                <div className='Service'>
                <Link to={`/services`}><img src={require('../assets/001-likes.png')} alt="" width="50" /><p>Social Media</p>
                    </Link>
                </div>
            </div>
            <h1>Last Discounts</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin:'100px' }}>
            <Card sx={{ maxWidth: 345 }}>

      <CardMedia
        component="img"
        height="194"
        image={require('../assets/computer-maintenance-and-repair.jpg')} 
        alt="Paella dish"
      />
            <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe" >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography style={{textAlign:'left'}} variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>

<CardMedia
  component="img"
  height="194"
  image={require('../assets/photographer-nigeria.png')} 
  alt="Paella dish"
/>
      <CardHeader
  avatar={
    <Avatar sx={{ bgcolor: yellow[700] }} aria-label="recipe" >
      S
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title="Shrimp and Chorizo Paella"
  subheader="September 14, 2016"
/>
<CardContent>
  <Typography style={{textAlign:'left'}} variant="body2" color="text.secondary">
    This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.
  </Typography>
</CardContent>
<CardActions disableSpacing>
  <IconButton aria-label="add to favorites">
    <FavoriteIcon />
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>
</CardActions>
</Card>
<Card sx={{ maxWidth: 345 }}>

<CardMedia
  component="img"
  height="194"
  image={require('../assets/Featured-Image-25.png')} 
  alt="Paella dish"
/>
      <CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
      W
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title="Shrimp and Chorizo Paella"
  subheader="September 14, 2016"
/>
<CardContent>
  <Typography style={{textAlign:'left'}} variant="body2" color="text.secondary">
    This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.
  </Typography>
</CardContent>
<CardActions disableSpacing>
  <IconButton aria-label="add to favorites">
    <FavoriteIcon />
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>
</CardActions>
</Card>
            </div>
            <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex',bgcolor:'#eeeeee' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            Create an account and post your business 
            </Typography>
            <br />
            <Typography variant="subtitle1" paragraph>
            Welcome to our business! We are a team of passionate professionals dedicated to providing high-quality products/services to our customers. Our mission is to help individuals and businesses achieve their goals by delivering innovative solutions tailored to their needs. With years of experience and a commitment to excellence, we are proud to offer a wide range of products/services designed to meet the unique needs of our clients. From start to finish, we strive to provide exceptional customer service and support to ensure that our clients are fully satisfied with the results. Thank you for choosing us, and we look forward to working with you!"
            </Typography>
            <Typography variant="subtitle1" color="primary">
            <Link to={`/services`}><p>Register Now</p>
                    </Link>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 600, height:400, paddingRight:10, display: { xs: 'none', sm: 'block' } }}
            image={require('../assets/Mouadh-Photo.jpg')} 
            alt="Featured-Image-25"
          />
        </Card>
      </CardActionArea>
    </Grid>
        
        </div>

    )
}

export default Home
