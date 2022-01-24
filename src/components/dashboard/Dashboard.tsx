import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard: React.FC = () => {
  return (
    <Grid>
      <Header />
      <Grid display="flex">
        <Sidebar />
        <Grid width="calc(100% - 300px)">
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
