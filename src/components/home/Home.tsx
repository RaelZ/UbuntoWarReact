import React from "react";
import type { FC } from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Register from "./register/Register";
import Impostors from "./impostors/Impostors";

const Home: FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#E5E5E5",
        flexDirection: "column",
      }}
    >
      <Grid />
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="80%"
        height="100%"
      >
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="70%"
          height="80%"
          mx={1}
          sx={{
            borderRadius: "5px",
            backgroundColor: "#fff",
            boxShadow: "0 0 5px #0000004F",
          }}
        >
          <Register />
        </Grid>
        <Grid
          mx={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="30%"
          height="80%"
          sx={{
            borderRadius: "5px",
            backgroundColor: "#fff",
            boxShadow: "0 0 5px #0000004F",
          }}
        >
          <Impostors />
        </Grid>
      </Grid>
      <Grid
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={2}
      >
        QODELESS 2022
      </Grid>
    </Box>
  );
};

export default Home;
