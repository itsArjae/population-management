import { Box, Divider, Paper, Typography, Button } from "@mui/material";

import React from 'react'

import AdminLayout from '../src/components/AdminLayout';
export default function Dashboard() {
  return (
    <Box
    sx={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "row",
      paddingTop:"100px"
    }}
  >
 

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
          width:"300px",
          height:"150px",
          marginLeft:"100px",
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
          width:"300px",
          height:"150px",
          marginLeft:"100px",
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
          width:"300px",
          height:"150px",
          marginLeft:"100px",
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
          width:"300px",
          height:"150px",
          marginLeft:"100px",
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
          width:"300px",
          height:"150px",
          marginLeft:"100px",
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
          width:"300px",
          height:"150px",
          marginLeft:"100px",
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
          width:"300px",
          height:"150px",
          marginLeft:"100px",
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
  )
  }

  Dashboard.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
  };


