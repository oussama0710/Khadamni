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
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Home = () => {
    const navigate = useNavigate()
    
    return (
        <div style={{marginTop:'100px'}}>
            
            <h1>Services Categories</h1>
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div >
                    <Link to={`/services`}><img src={require('../assets/005-video-player.png')} alt="" width="50" /><p>Audio-Visual</p>
                    </Link>
                </div>
                <div>
                <Link to={`/services`}><img src={require('../assets/004-vector.png')} alt="" width="50" /><p>Graphic Design</p>
                    </Link>
                </div>
                <div>
                <Link to={`/services`}><img src={require('../assets/002-code.png')} alt="" width="50" /><p>Web/Mobile Development</p>
                    </Link>
                </div>
                <div>
                <Link to={`/services`}><img src={require('../assets/003-seo.png')} alt="" width="50" /><p>Seo</p>
                    </Link>
                </div>
                <div>
                <Link to={`/services`}><img src={require('../assets/001-likes.png')} alt="" width="50" /><p>Social Media</p>
                    </Link>
                </div>
            </div>
            <h1>Last Discounts</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Card sx={{ maxWidth: 345 }}>

      <CardMedia
        component="img"
        height="194"
        image={require('../assets/computer-maintenance-and-repair.jpg')} 
        alt="Paella dish"
      />
            <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
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
  image={require('../assets/computer-maintenance-and-repair.jpg')} 
  alt="Paella dish"
/>
      <CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
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
  image={require('../assets/computer-maintenance-and-repair.jpg')} 
  alt="Paella dish"
/>
      <CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
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
            </div>
        
        </div>

    )
}

export default Home
