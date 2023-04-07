import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const Dashboard = () => {
    const NavbarLink = styled(Link)`
        text-decoration: none;
        color: grey;
    `;

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <Box sx={{ display: "flex"}}>
            {/* <Link to="/dashboard/services">Services</Link>
            <Link to="/dashboard/add">Add Service</Link> */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 250,
                    bgcolor: "background.paper",
                }}
            >
                <nav>
                    <List>
                        <ListItem /* disablePadding */>
                            <NavbarLink to="/dashboard/services">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Services" />
                                </ListItemButton>
                            </NavbarLink>
                        </ListItem>
                        <ListItem /* disablePadding */>
                            <NavbarLink to="/dashboard/add">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Add Service" />
                                </ListItemButton>
                            </NavbarLink>
                        </ListItem>
                    </List>
                </nav>
            </Box>
            <Outlet />
        </Box>
    );
};

export default Dashboard;
