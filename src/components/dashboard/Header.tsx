import { Grid, Typography } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
  return (
    <Grid
      width="100%"
      height="70px"
      display="flex"
      alignItems="center"
      px={2}
      style={{ backgroundColor: "rgba(138, 59, 59, 0.5)" }}
    >
      <Grid
        style={{ borderRadius: "10px", border: "2px solid #8A3B3B" }}
        width="220px"
        px={8}
        py={1}
      >
        <Typography color="#8A3B3B">ALMONDE’GUS</Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
