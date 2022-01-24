import React, { useState } from "react";
import type { FC } from "react";
import { Box } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

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
      await LoginFunc(login);
      navigate("/home");
    } catch {
      console.log("Um erro ocorreu!");
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: "100%", height: "100vh", backgroundImage: "linear-gradient(75deg, #ccc, #444)", flexDirection: 'column' }}
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
          boxShadow: "0 0 5px #0000004F",
        }}
      >
        <Typography variant="h2">LOGIN</Typography>
        <Grid
          display="flex"
          justifyContent="center"
          container
          width="100%"
          spacing={2}
          p={2}
          m={0}
        >
          <Grid item width="100%" lg={12} md={12} sm={12}>
            <TextField
              fullWidth
              label="E-mail"
              name="email"
              sx={{ '& .MuiInput-root': { borderRadius: 0 } }}
              onChange={(e: any) =>
                setLogin({ ...login, [e.target.name]: e.target.value })
              }
              value={email}
            />
          </Grid>
          <Grid item width="100%" lg={12} md={12} sm={12}>
            <TextField
              fullWidth
              label="Senha"
              name="password"
              sx={{ '& .MuiTextField-root': { borderRadius: 0 } }}
              onChange={(e: any) =>
                setLogin({ ...login, [e.target.name]: e.target.value })
              }
              value={password}
            />
          </Grid>
        </Grid>
        <Grid>
          <Button onClick={handleLogin} variant="contained"  style={{backgroundImage: "linear-gradient(-75deg, #ccc, #5d5d5d)"}}>
            Entrar
          </Button>
        </Grid>
      </Grid>
      <Grid width="100%" display="flex" justifyContent="center" alignItems="center" p={2}><img height="35" width="180" src="https://qodeless.io/wp-content/uploads/2021/09/logo3.png" /></Grid>
    </Box>
  );
};

export default Login;
