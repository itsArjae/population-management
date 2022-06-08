import {
  AppBar,
  Avatar,
  Box,
  ButtonBase,
  CardMedia,
  Drawer,
  IconButton,
  Paper,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  AccountCircle,
  TextField,

} from "@mui/material";

import {useState} from "react";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

export default function AdminLayout({children}) {
const router = useRouter();
const [open, setopen] = useState(false);

const  setDrawerOpen = () => {
  setopen(true);
}
const  handleClose = () => {
  setopen(false);
}
  return (
    
    // full screen
    <Box>
     
     {/* APP BAR */}
      <AppBar sx={{ padding: "10px", backgroundColor: "#97DBAE" }}>
        <toolbar>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <IconButton onClick={setDrawerOpen}>
         
              <Image
                src="/svg/bar.svg"
                alt="bars"
                width={40}
                height={30}
              />
            </IconButton>

            <Typography
              variant="h2"
              sx={{
                fontSize: "50px",
                fontFamily: "Times New Roman",
                marginLeft: "20px",
              }}
            >
              PMS
            </Typography>
          </Box>
        </toolbar>
      </AppBar>

      <Drawer anchor="left"  open={open}>
        <Box
          sx={{ display: "flex", flexDirection: "column", minWidth: "200px" }}
        >

            


          <List>
                  
          <ListItem button onClick={handleClose} sx={{backgroundColor:"#B6FFCE"}} >
              <ListItemIcon  >
                <Image
                  src="/pictures/arrowleft.png"
                  alt="about"
                  width={30}
                  height={30}
                />
              </ListItemIcon>
           
            </ListItem>

            <Divider/>

             
            <Box >
               <Image src="/pictures/pms-logo.png" alt="logo" width={200} height={200}/>
            </Box>
            <Divider/>
             {/* BUTTONS */}
            <ListItem button onClick={()=> router.push("/dashboard") } >
              <ListItemIcon>
                <Image
                  src="/svg/dashboard.icon.svg"
                  alt="about"
                  width={20}
                  height={20}
                />
              </ListItemIcon>
              <ListItemText sx={{
               
              }} >
              <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                fontFamily: "Times New Roman",

              }}
            >
              DASHBOARD
            </Typography>
                  </ListItemText>
            </ListItem>

            <ListItem button onClick={()=> router.push("/addrecord") } >
              <ListItemIcon>
              <Image
                  src="/svg/database.svg"
                  alt="about"
                  width={20}
                  height={20}
                />
              </ListItemIcon>
              <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                fontFamily: "Times New Roman",

              }}
            >
              NEW RECORD
            </Typography>
            </ListItem>

            <ListItem button onClick={()=> router.push("/about") } >
              <ListItemIcon>
              <Image
                  src="/svg/about-icon.svg"
                  alt="about"
                  width={20}
                  height={20}
                />
              </ListItemIcon>
              <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                fontFamily: "Times New Roman",

              }}
            >
              ABOUT US
            </Typography>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Image
                  src="/svg/logout.svg"
                  alt="about"
                  width={20}
                  height={20}
                />
              </ListItemIcon>
              <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                fontFamily: "Times New Roman",

              }}
            >
              LOG OUT
            </Typography>
            </ListItem>

          </List>
        </Box>
      </Drawer>

      <Box>{children}</Box>
    </Box>


       
       
  );
}
