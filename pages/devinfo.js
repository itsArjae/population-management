import { Box } from '@mui/system'
import React from 'react'
import Image from "next/image";
import { Paper, Typography } from '@mui/material';


import AdminLayout from '../src/components/AdminLayout';
export default function devinfo() {
  return (
    <Box sx={{width:"100vw", height:"100vh", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}} >

     <Paper elevation={3} sx={{
       marginBottom: "50px",
       padding:"5px",
       backgroundColor:"skyblue"
     }} >
     <Typography
              variant="h2"
              sx={{
                fontSize: "60px",
                fontFamily: "Times New Roman",
               
              }}
            >
           DEVELOPERS INVOLVED IN THE CREATION OF THIS PROJECT 
            </Typography>
     </Paper>

           
      
    <Box sx={{display:"flex", flexDirection:"row"}} >

      
      <Paper elevation={3} sx={{display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"10px", marginRight:"100px" }} >
      <Image src="/pictures/arjae.png" width={300} height={300} />
      
      <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                fontFamily: "Times New Roman",
                marginTop: "20px",
              }}
            >
             ARJAE CARLO M. IPORONG
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                fontFamily: "Times New Roman",
                marginTop: "20px",
              }}
            >
             "Jae"
            </Typography>
      </Paper>

      <Paper elevation={3} sx={{display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"10px", marginRight:"100px"  }} >
      <Image src="/pictures/gem.jpg" width={300} height={300} />
      
      <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                fontFamily: "Times New Roman",
                marginTop: "20px",
              }}
            >
             GEM ANGELO BALBASTRO
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                fontFamily: "Times New Roman",
                marginTop: "20px",
              }}
            >
             "Gem"
            </Typography>
      </Paper>

      <Paper elevation={3} sx={{display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"10px", marginRight:"100px"  }} >
      <Image src="/pictures/andrei.jpg" width={300} height={300} />
      
      <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                fontFamily: "Times New Roman",
                marginTop: "20px",
              }}
            >
             JOHN ANDREI UBONGEN
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: "20px",
                fontFamily: "Times New Roman",
                marginTop: "20px",
              }}
            >
             "Drei"
            </Typography>
      </Paper>


    </Box>

    </Box>
    

  )
}

devinfo.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
