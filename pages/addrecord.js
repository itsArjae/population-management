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
  const [voter, setVoter] = useState("");


const display = () => {
setVoter(document.getElementById("cars").value.toString())
console.log(fname+mname+sname+age+contact+voter);
};

  /*
  const newRecord = () => {
      Axios.post("localhost:5000/api/create", {
          fname: fname,
          mname: mname,
          sname: sname,
          age: age,
          contact: contact,
          voter: voter,
      }).then(()=> {
          console.log("success");
      })
  };*/

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

<TextField id="standard-basic" label="SURNAME" variant="outlined" sx={{marginRight:"30px"}} onChange={(event) => {
  setSname(event.target.value);
}} />
<TextField id="standard-basic" label="FIRST NAME" variant="outlined" sx={{marginRight:"30px" }} onChange={(event) => {
  setFname(event.target.value);
}} />
<TextField id="standard-basic" label="MIDDLE NAME" variant="outlined" sx={{marginRight:"30px"}} onChange={(event) => {
  setMname(event.target.value);
}}/>


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

<TextField id="standard-basic" type="number" label="AGE" variant="outlined" sx={{marginRight:"30px"}} onChange={(event) => {
  setAge(event.target.value);
}}/>
<TextField id="standard-basic" type="number" label="CONTACT" variant="outlined" sx={{marginRight:"30px"}} onChange={(event) => {
  setContact(event.target.value);
}} />
<TextField id="standard-basic" type="text" label="VOTER(Yes/No)" variant="outlined" sx={{marginRight:"30px"}} onChange={(event) => {
  setVoter(event.target.value);
}} />


     

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

<TextField id="standard-basic" type="text" label="EMPLOYMENT" variant="outlined" sx={{marginRight:"30px"}} onChange={(event) => {
  setAge(event.target.value);
}}/>
<TextField id="standard-basic" type="text" label="PERMANENT ADDRESS" variant="outlined" sx={{marginRight:"30px", width:"480px"}} onChange={(event) => {
  setAge(event.target.value);
}}/>


     

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

<TextField id="standard-basic" type="text" label="GENDER(Male/Female)" variant="outlined" sx={{marginRight:"30px"}} onChange={(event) => {
  setAge(event.target.value);
}}/>


     

  </Box>
         <Button onClick={display} variant="outlined" sx={{marginTop:"50px", width:"300px" }} >CONFIRM</Button>

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
  { title: 'VOTER', result: "NON VOTER"},
  { title: 'NON VOTER', result: "'NON VOTER'"},
 
];