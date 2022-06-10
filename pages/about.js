import { Box } from '@mui/system';
import React from 'react'
import Image from 'next/image'
import AdminLayout from "../src/components/AdminLayout";
import { Paper, Typography } from '@mui/material';
export default function about() {
  return (
   <Box sx={{width:"100vw", height:"100vh", display:"flex", justifyContent:"center",alignItems:"center"}} >
     
     <Image src="/pictures/pms-logo.png" width={700} height={600}/>
      <Paper elevation={5} sx={{
        padding:"10px"
      }} >
      <Typography VARIANT="h1" sx={{
           fontSize: "50px",
           fontFamily: "Times New Roman",
      }} >
        POPULATION MANAGEMENT SYSTEM (PMS)
      </Typography>
      <Typography variant="h3" sx={{
           fontSize: "30px",
           fontFamily: "Times New Roman",
      }} >
        This website will enable the user to manage and monitor the different types of people leaving in a designated area. <br/>
        This will help greatly in making important decisions.
      </Typography>

      </Paper>


   </Box>
  )
}



about.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
