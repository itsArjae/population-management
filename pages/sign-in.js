import { Button, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";
export default function SignIn() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    
      }}
    >
      <Box>
        <Image src="/pictures/pop.png" width={700} height={700}/>
      </Box>

      <Paper
        eleveation={5}
        sx={{
          width: "400px",
          height: "500px",
          boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          marginLeft:"200px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          flexDirection:"column"
        }}
        
      >
        <Box>
          <Image src="/svg/user.svg" height={100} width={100}  ></Image>
        </Box>
<TextField id="filled-basic" label="Admin Username" variant="filled" />

<TextField id="filled-basic" label="Admin Password" variant="filled" sx={{
  marginTop:"50px",
  marginBottom:"50px"
}} />

<Button variant="contained">Login</Button>


      </Paper>
    </Box>
  );
}
