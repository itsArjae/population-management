import { Box } from '@mui/system'
import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(Name,Voter,Age,AgeType,Gender,Employment) {
  return { Name,Voter,Age,AgeType,Gender,Employment };
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const rows = [
  createData('Illonggo, Allyzza','True',20,'Adult','Female','Student'),
  createData('Dela Cruz, Juan','False',10,'Minor','Male','Student'),
  createData('De Guzman, Angelito','True',67,'Senior Citizen','Male','Employed'),
  createData('Pilipinas, John Carlo','True',98,'Deceased','Male','N/A'),
  createData('Guanzing, Madelline','True',20,'Adult','Female','Student'),

  createData('Max,Jayson','True',39,'Adult','Male','Employed'),
  createData('Dela Cruz, Juan','False',10,'Minor','Male','Student'),
  createData('De Guzman, Angelito','True',67,'Senior Citizen','Male','Employed'),
  createData('Pilipinas, John Carlo','True',98,'Deceased','Male','N/A'),
  createData('Guanzing, Madelline','True',20,'Adult','Female','Student'),

  createData('Guanzing, Allyzza ','True',20,'Adult','Female','Student'),
  createData('Dela Cruz, Juan','False',10,'Minor','Male','Student'),
  createData('De Guzman, Angelito','True',67,'Senior Citizen','Male','Employed'),
  createData('Pilipinas, John Carlo','True',98,'Deceased','Male','N/A'),
  createData('Guanzing, Madelline','True',20,'Adult','Female','Student'),

  createData('Guanzing, Allyzza ','True',20,'Adult','Female','Student'),
  createData('Dela Cruz, Juan','False',10,'Minor','Male','Student'),
  createData('De Guzman, Angelito','True',67,'Senior Citizen','Male','Employed'),
  createData('Pilipinas, John Carlo','True',98,'Deceased','Male','N/A'),
  createData('Guanzing, Madelline','True',20,'Adult','Female','Student')

];


import AdminLayout from '../src/components/AdminLayout';
export default function list() {


  return (
    
    <Box sx={{width:"100vw", height:"100vh", display:"flex",  justifyContent:"center",padding:"20px"}} >
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 70, marginTop:"110px" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">VoterStatus</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">AgeType</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Employment</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Name}>
              <StyledTableCell component="th" scope="row">
                {row.Name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Voter}</StyledTableCell>
              <StyledTableCell align="right">{row.Age}</StyledTableCell>
              <StyledTableCell align="right">{row.AgeType}</StyledTableCell>
              <StyledTableCell align="right">{row.Gender}</StyledTableCell>
              <StyledTableCell align="right">{row.Employment}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}


list.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
