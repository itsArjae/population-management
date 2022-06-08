import { Box, Divider, Paper, Typography, Button } from "@mui/material";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AdminLayout from "../src/components/AdminLayout";
const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

const getUsers = async () => {
  const response = await axios.get("http://127.0.0.1:5000/api/user");

  if(response.status === 200){
    setData(response.data);
  }
  else{
    console.log("ayaw");
  }

};

console.log("data=>", data);

console.log("hello");
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        paddingTop: "100px",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: "300px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "red",
              width: "300px",
              height: "150px",
              marginLeft: "100px",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "white",
              }}
            >
              Population
            </Typography>
            <Box
              sx={{
                border: "1px solid white",
              }}
            ></Box>
            <Typography variant="h2" sx={{ color: "white" }}>
              4599
            </Typography>
            `
          </Paper>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "blue",
              width: "300px",
              height: "150px",
              marginLeft: "100px",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "white",
              }}
            >
              Voters
            </Typography>
            <Box
              sx={{
                border: "1px solid white",
              }}
            ></Box>
            <Typography variant="h2" sx={{ color: "white" }}>
              2509
            </Typography>
            `
          </Paper>

          <Paper
            elevation={3}
            sx={{
              backgroundColor: "green",
              width: "300px",
              height: "150px",
              marginLeft: "100px",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "white",
              }}
            >
              Senior Citizen
            </Typography>
            <Box
              sx={{
                border: "1px solid white",
              }}
            ></Box>
            <Typography variant="h2" sx={{ color: "white" }}>
              1599
            </Typography>
            `
          </Paper>
        </Box>
        <Box
          sx={{
            height: "300px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "black",
              width: "300px",
              height: "150px",
              marginLeft: "100px",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "white",
              }}
            >
              Male
            </Typography>
            <Box
              sx={{
                border: "1px solid white",
              }}
            ></Box>
            <Typography variant="h2" sx={{ color: "white" }}>
              2000
            </Typography>
            `
          </Paper>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "pink",
              width: "300px",
              height: "150px",
              marginLeft: "100px",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "white",
              }}
            >
              Female
            </Typography>
            <Box
              sx={{
                border: "1px solid white",
              }}
            ></Box>
            <Typography variant="h2" sx={{ color: "white" }}>
              2599
            </Typography>
            `
          </Paper>
        </Box>
        <Box
          sx={{
            height: "300px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "black",
              width: "300px",
              height: "150px",
              marginLeft: "100px",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "white",
              }}
            >
              Male
            </Typography>
            <Box
              sx={{
                border: "1px solid white",
              }}
            ></Box>
            <Typography variant="h2" sx={{ color: "white" }}>
              2000
            </Typography>
            `
          </Paper>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "pink",
              width: "300px",
              height: "150px",
              marginLeft: "100px",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "white",
              }}
            >
              Female
            </Typography>
            <Box
              sx={{
                border: "1px solid white",
              }}
            ></Box>
            <Typography variant="h2" sx={{ color: "white" }}>
              2599
            </Typography>
            `
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
