import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import useAuth from "../../hooks/useAuth";

const Sidebar: React.FC = () => {
  const { Logout } = useAuth();
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
        <Grid display="flex" justifyContent="center">
          <Button
            sx={{
              width: "90%",
              borderRadius: "25px",
              backgroundColor: "rgba(224, 224, 224, 1)",
              color: "black",
            }}
            variant="contained"
          >
            Dashboard
          </Button>
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
