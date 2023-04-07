import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, blue, yellow } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Video from "../assets/Video1.mp4";
import "../HeroStyles.css";
import styled from "styled-components";
import { Box } from "@mui/material";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="hero">
                <video autoPlay loop muted id="video">
                    <source src={Video} type="video/mp4" />
                </video>
            </div>

            <div className="ServicesCategories">
                <Typography
                    variant="h2"
                    sx={{ textAlign: "center", fontSize: 36, width: "100%" }}
                >
                    Services
                </Typography>
                <div className="Service">
                    <StyledLink to={`/services/audioVisual`}>
                        <img
                            src={require("../assets/005-video-player.png")}
                            alt=""
                            width="50"
                        />
                        <p>Audio-Visual</p>
                    </StyledLink>
                </div>
                <div className="Service">
                    <StyledLink to={`/services/graphicDesigner`}>
                        <img
                            src={require("../assets/004-vector.png")}
                            alt=""
                            width="50"
                        />
                        <p>Graphic-Design</p>
                    </StyledLink>
                </div>
                <div className="Service">
                    <StyledLink to={`/services/web-mobileDevelopment`}>
                        <img
                            src={require("../assets/002-code.png")}
                            alt=""
                            width="50"
                        />
                        <p>Web/Mobile Development</p>
                    </StyledLink>
                </div>
                <div className="Service">
                    <StyledLink to={`/services/gamesDevelopment`}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5847/5847514.png"
                            alt=""
                            width="50"
                        />
                        <p>Games Development</p>
                    </StyledLink>
                </div>
                <div className="Service">
                    <StyledLink to={`/services/seo`}>
                        <img
                            src={require("../assets/003-seo.png")}
                            alt=""
                            width="50"
                        />
                        <p>Seo</p>
                    </StyledLink>
                </div>
                <div className="Service cat_StyledLink">
                    <StyledLink to={`/services/socialMedia`}>
                        <img
                            src={require("../assets/001-likes.png")}
                            alt=""
                            width="50"
                        />
                        <p>Social Media</p>
                    </StyledLink>
                </div>
            </div>
            <Typography variant="h2" sx={{ textAlign: "center", fontSize: 36 }}>
                Last Discounts
            </Typography>
            <div className="last_discount">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://cdn.shrm.org/image/upload/c_crop%2Ch_1192%2Cw_2121%2Cx_0%2Cy_221/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Organizational%20and%20Employee%20Development/iStock-637152194_dnbwb4?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjIyMSwieDIiOjIxMjEsInkyIjoxNDE0LCJ3IjoyMTIxLCJoIjoxMTkyfX0%3D"
                        alt="Paella dish"
                    />
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{ bgcolor: blue[500] }}
                                aria-label="recipe"
                            >
                                p
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Social media manager"
                        subheader="April 2, 2023"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        Social media continues to be a growing field. According to data on LinkedIn, the demand for paid social media skills rose 116.4 percent, while the demand for Instagram skills rose 28.4 percent since the onset of the pandemic 
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
                        image={require("../assets/computer-maintenance-and-repair.jpg")}
                        alt="Paella dish"
                    />
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{ bgcolor: blue[500] }}
                                aria-label="recipe"
                            >
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Computer technicien"
                        subheader="Mars 29, 2023"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
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
                        image={require("../assets/photographer-nigeria.png")}
                        alt="Paella dish"
                    />
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{ bgcolor: yellow[700] }}
                                aria-label="recipe"
                            >
                                S
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Photographer"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
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
                        image={require("../assets/Featured-Image-25.png")}
                        alt="Paella dish"
                    />
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{ bgcolor: red[500] }}
                                aria-label="recipe"
                            >
                                W
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Web developer"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
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
            <CallToAction>
                <Box sx={{ flex: 6 }}>
                    <Typography component="h2" variant="h5" mb={2}>
                        Create an account and post your business
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Welcome to our business! We are a team of passionate
                        professionals dedicated to providing high-quality
                        products/services to our customers. Our mission is to
                        help individuals and businesses achieve their goals by
                        delivering innovative solutions tailored to their needs.
                        With years of experience and a commitment to excellence,
                        we are proud to offer a wide range of products/services
                        designed to meet the unique needs of our clients. From
                        start to finish, we strive to provide exceptional
                        customer service and support to ensure that our clients
                        are fully satisfied with the results. Thank you for
                        choosing us, and we look forward to working with you!"
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                        <RegisterLink to={`/register`}>
                            <p>Register Now</p>
                        </RegisterLink>
                    </Typography>
                </Box>
                <Box sx={{ flex: 4 }}>
                    <StyledImg
                        src={require("../assets/Mouadh-Photo.jpg")}
                        loading="lazy"
                        width="500"
                        alt=""
                    />
                </Box>
            </CallToAction>
        </div>
    );
};

export default Home;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;
const RegisterLink = styled(Link)`
    color: black;
`;
const CallToAction = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 2rem;
`;
const StyledImg = styled.img`
    border-radius: 10px;
`;
