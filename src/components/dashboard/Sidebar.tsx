import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Sidebar: React.FC = () => {
  const { Logout } = useAuth();
  const [open, setOpen] = useState('home')
  const navigate = useNavigate();
  return (
    <Grid
      height="calc(100vh - 70px)"
      width="300px"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Grid>
        <Typography p={2}>Home</Typography>
        <Grid display="flex" width="100%" flexDirection="column" alignItems="center" justifyContent="space-around">
          <Grid width="100%" display="flex" justifyContent="center" my={1}>
            <Button
              onClick={() => {setOpen('home'); navigate("/")}}
              sx={{
                width: "90%",
                borderRadius: "25px",
                backgroundColor: open === 'home' ? 'rgba(138, 59, 59, 1)' : "rgba(224, 224, 224, 1)",
                color: open === 'home' ? 'white' : "black",
                '&:hover': { backgroundColor: open === 'home' ? 'rgba(130, 50, 50, 1)' : "rgba(200, 200, 200, 1)", }
              }}
              variant="contained"
            >
              Dashboard
            </Button>
          </Grid>
          <Grid width="100%" display="flex" justifyContent="center" my={1}>
            <Button
              onClick={() => {setOpen('cadastro'); navigate("/cadastro")}}
              sx={{
                width: "90%",
                borderRadius: "25px",
                backgroundColor: open === 'cadastro' ? 'rgba(138, 59, 59, 1)' : "rgba(224, 224, 224, 1)",
                color: open === 'cadastro' ? 'white' : "black",
                '&:hover': { backgroundColor: open === 'cadastro' ? 'rgba(130, 50, 50, 1)' : "rgba(200, 200, 200, 1)", }
              }}
              variant="contained"
            >
              Cadastro
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid p={2} display="flex" justifyContent="center">
        <Button
          onClick={() => Logout()}
          sx={{
            width: "90%",
            borderRadius: "25px",
            backgroundColor: "rgba(138, 59, 59, 1)",
          }}
          variant="contained"
        >
          Sair
        </Button>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
