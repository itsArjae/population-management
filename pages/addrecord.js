import { Box, Divider, Paper, Typography, Button, TextField, Autocomplete, Stack } from "@mui/material";
//import Autocomplete from '@mui/material/Autocomplete';
import React, { useState } from 'react'
import Axios from 'axios';
import Image from "next/image";
import { useRouter } from 'next/router';


import AdminLayout from '../src/components/AdminLayout';
export default function Addrecord() {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [sname, setSname] = useState("");
  const [age, setAge] = useState(0);
  const [contact, setContact] = useState("");
  const [voter, setVoter] = useState();

  const newRecord = () => {
      Axios.post("localhost:5000/api/create", {
          fname: fname,
          mname: mname,
          sname: sname,
          age: age,
          contact: contact,
          voter: voter,
      });
  };

    const defaultProps = {
      options: top100Films,
      getOptionLabel: (option) => option.title,
    };
  
    const flatProps = {
      options: top100Films.map((option) => option.title),
    };
  
    const [value, setValue] = React.useState(null);

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
          justifyContent:"center",
          alignItems:"center"
        }}
      >
       <Paper elevation={3} sx={{
         width:"1000px",
         height:"800px",
         display:"flex",
         flexDirection:"column",
         alignItems:"center",
         boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
       }} >
         <Typography variant="h3" >Input Data</Typography>
         <Box sx={{
    
           height:"100px",
           width:"900px",
           dispplay:"flex",
           flexDirection:"row",
           justifyContent:"center",
           marginTop:"50px",
           paddingLeft:"50px"
         }} >

<TextField id="standard-basic" label="SURNAME" variant="outlined" sx={{marginRight:"30px"}}/>
<TextField id="standard-basic" label="FIRST NAME" variant="outlined" sx={{marginRight:"30px"}}/>
<TextField id="standard-basic" label="MIDDLE NAME" variant="outlined" sx={{marginRight:"30px"}}/>


         </Box>
         <Box sx={{
    
    height:"100px",
    width:"900px",
    dispplay:"flex",
    flexDirection:"row",
    justifyContent:"center",
    marginTop:"50px",
    paddingLeft:"50px"
  }} >

<TextField id="standard-basic" type="number" label="AGE" variant="outlined" sx={{marginRight:"30px"}}/>
<TextField id="standard-basic" type="number" label="CONTACT" variant="outlined" sx={{marginRight:"30px"}}/>


<Autocomplete
        
        id="disable-close-on-select"
        {...defaultProps}
        options={top100Films}
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField {...params} label="ARE YOU A VOTER?" variant="standard" sx={{width:"300px", marginTop:"50px"}} />
        )}
      />
     

  </Box>
         <Button variant="outlined" sx={{marginTop:"100px"}} >CONFIRM</Button>

       </Paper>
  
      </Box>
{/*================================================*/} 

    </Box>
  )
}

Addrecord.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

const top100Films = [
  { title: 'VOTER', result: 'true' },
  { title: 'NON VOTER', result: 'true'},
 
];