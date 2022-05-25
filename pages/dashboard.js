import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";

export default function dashboard() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          borderRight: "2px solid black",
          width: "400px",
          height: "100vh",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      ></Box>

      <Box
        sx={{
          width: "100vw",
          display:"flex",
          flexDirection:"column",
          
        }}
      >
        <Box
          sx={{
            height:"300px",
            display:"flex",
            flexDirection:"row",
            alignItems:"center"
          }}
        >

          <Paper elevation={3} sx={{
            backgroundColor:"red",
            width:"250px",
            height:"150px",
            marginLeft:"50px",
            display:"flex",
            flexDirection:"column",
            padding:"10px"
          }} >

            <Typography variant="h5" sx={{
              color:"white"
            }} >Population</Typography>
            <Box sx={{
              border:"1px solid white"
            }} ></Box>
<Typography variant="h2" sx={{color:"white"}} >4599</Typography>`


          </Paper>
          <Paper elevation={3} sx={{
            backgroundColor:"blue",
            width:"250px",
            height:"150px",
            marginLeft:"50px",
            display:"flex",
            flexDirection:"column",
            padding:"10px"
          }} >

            <Typography variant="h5" sx={{
              color:"white"
            }} >Voters</Typography>
            <Box sx={{
              border:"1px solid white"
            }} ></Box>
<Typography variant="h2" sx={{color:"white"}} >2509</Typography>`


          </Paper>

          <Paper elevation={3} sx={{
            backgroundColor:"green",
            width:"250px",
            height:"150px",
            marginLeft:"50px",
            display:"flex",
            flexDirection:"column",
            padding:"10px"
          }} >

            <Typography variant="h5" sx={{
              color:"white"
            }} >Senior Citizen</Typography>
            <Box sx={{
              border:"1px solid white"
            }} ></Box>
<Typography variant="h2" sx={{color:"white"}} >1599</Typography>`


          </Paper>


        </Box>
        <Box
          sx={{
            height:"300px",
            display:"flex",
            flexDirection:"row",
            alignItems:"center"
          }}
        >

          <Paper elevation={3} sx={{
            backgroundColor:"black",
            width:"250px",
            height:"150px",
            marginLeft:"50px",
            display:"flex",
            flexDirection:"column",
            padding:"10px"
          }} >

            <Typography variant="h5" sx={{
              color:"white"
            }} >Male</Typography>
            <Box sx={{
              border:"1px solid white"
            }} ></Box>
<Typography variant="h2" sx={{color:"white"}} >2000</Typography>`


          </Paper>
          <Paper elevation={3} sx={{
            backgroundColor:"pink",
            width:"250px",
            height:"150px",
            marginLeft:"50px",
            display:"flex",
            flexDirection:"column",
            padding:"10px"
          }} >

            <Typography variant="h5" sx={{
              color:"white"
            }} >Female</Typography>
            <Box sx={{
              border:"1px solid white"
            }} ></Box>
<Typography variant="h2" sx={{color:"white"}} >2599</Typography>`


          </Paper>

        


        </Box>
      </Box>
    </Box>
  );
}
