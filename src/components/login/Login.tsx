import React, { useState } from "react";
import type { FC } from "react";
import { Box } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../images";

const Login: FC = () => {
  const { Login: LoginFunc } = useAuth();
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = login;

  const handleLogin = async () => {
    try {
      await LoginFunc(email, password);
      navigate("/");
    } catch {
      console.log("Um erro ocorreu!");
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: "100%",
        height: "100vh",
        backgroundCalor: "#fff",
        flexDirection: "column",
      }}
    >
      <Grid />
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={4}
        sx={{
          borderRadius: "5px",
          backgroundColor: "#fff",
          boxShadow: "0 0 15px #0000004F",
        }}
      >
        <img alt="logo" height="120" width="120" src={`${Logo}`} />
        <Grid
          style={{ borderRadius: "10px", border: "2px solid #8A3B3B" }}
          px={8}
          py={1}
        >
          <Typography color="#8A3B3B">ALMONDE’GUS</Typography>
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          container
          width="100%"
          spacing={2}
          p={2}
          m={0}
        >
          <Typography>ACESSO AO PORTAL ADMINISTRATIVO</Typography>
          <Grid
            item
            display="flex"
            justifyContent="center"
            width="100%"
            lg={12}
            md={12}
            sm={12}
          >
            <TextField
              label="E-mail de acesso"
              name="email"
              sx={{ width: "50%", "& .MuiInput-root": { borderRadius: 0 } }}
              onChange={(e: any) =>
                setLogin({ ...login, [e.target.name]: e.target.value })
              }
              value={email}
            />
          </Grid>
          <Grid
            item
            display="flex"
            justifyContent="center"
            width="100%"
            lg={12}
            md={12}
            sm={12}
          >
            <TextField
              fullWidth
              type="password"
              label="Senha de acesso"
              name="password"
              sx={{ width: "50%", "& .MuiTextField-root": { borderRadius: 0 } }}
              onChange={(e: any) =>
                setLogin({ ...login, [e.target.name]: e.target.value })
              }
              value={password}
            />
          </Grid>
          <Grid
            item
            display="flex"
            justifyContent="center"
            width="100%"
            lg={12}
            md={12}
            sm={12}
          >
            <Button
              fullWidth
              onClick={() => handleLogin()}
              variant="contained"
              sx={{ width: "50%" }}
              style={{
                backgroundColor: "#8A3B3B",
              }}
            >
              Log in
            </Button>
          </Grid>
        </Grid>
        <Grid></Grid>
      </Grid>
      <Grid
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: '#444' }}
        p={2}
      >
        <img
          alt="logo"
          height="35"
          width="180"
          src="https://qodeless.io/wp-content/uploads/2021/09/logo3.png"
        />
      </Grid>
    </Box>
  );
};

export default Login;
