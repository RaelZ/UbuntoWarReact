import React, { useState } from "react";
import type { FC } from "react";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import { sha256 } from "js-sha256";

// sha256(nome+telefone+area+indicador+dataindicacao+ubuntu)
const Register: FC = () => {
  const [area, setArea] = useState(0);
  const [date, setDate] = useState<Date | null | string>(
    moment().format("yyyy-MM-DD")
  );
  const [ubunto, setUbunto] = useState({
    name: "",
    tel: "",
    area,
    indicator: "",
    date,
  });
  const { name, tel, area: areaSTR, indicator, date: dateSTR } = ubunto;
  const sendHash =sha256(`${name}+${tel}+${areaSTR}+${indicator}+${dateSTR}+ubunto`);
  console.log(sendHash);
  return (
    <Grid width="100%" container spacing={2} p={2}>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2">Cadastre um Ubunto</Typography>
      </Grid>
      <Grid item lg={6} md={6} sm={12}>
        <TextField
          fullWidth
          name="name"
          label="Nome"
          onChange={(e: any) =>
            setUbunto({ ...ubunto, [e.target.name]: e.target.value })
          }
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12}>
        <TextField
          fullWidth
          label="Telefone"
          name="tel"
          onChange={(e: any) =>
            setUbunto({ ...ubunto, [e.target.name]: e.target.value })
          }
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12}>
        <Select
          fullWidth
          value={area}
          name="area"
          onChange={(e: any) => {
            setArea(e.target.value);
            setUbunto({ ...ubunto, [e.target.name]: e.target.value });
          }}
        >
          <MenuItem value={0}>Selecione...</MenuItem>
          <MenuItem value={1}>Scrum</MenuItem>
          <MenuItem value={2}>Figma</MenuItem>
          <MenuItem value={3}>Flutter</MenuItem>
          <MenuItem value={4}>React</MenuItem>
          <MenuItem value={5}>C#</MenuItem>
          <MenuItem value={6}>Unity</MenuItem>
        </Select>
      </Grid>
      <Grid item lg={6} md={6} sm={12}>
        <TextField
          fullWidth
          name="date"
          type="date"
          value={date}
          onChange={(e: any) => {
            setDate(e.target.value);
            setUbunto({ ...ubunto, [e.target.name]: e.target.value });
          }}
        />
      </Grid>
      <Grid item lg={12} md={12} sm={12}>
        <TextField
          fullWidth
          label="Nome de quem indicou"
          name="indicator"
          onChange={(e: any) =>
            setUbunto({ ...ubunto, [e.target.name]: e.target.value })
          }
        />
      </Grid>
      <Grid
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        item
        lg={12}
        md={12}
        sm={12}
      >
        <Button variant="contained">Cadastrar</Button>
      </Grid>
    </Grid>
  );
};

export default Register;
