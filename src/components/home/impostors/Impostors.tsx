import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { authApi } from "../../../api/AuthApi";

const Impostors: FC = () => {
  const [trojan, setTrojan] = useState<any[]>([
    {
      nome: "",
      isValid: false,
    },
  ]);
  useEffect(() => {
    (async function GetUbuntos() {
      const response: any = await authApi.ubuntoTrojan();
      setTrojan(response);
    })();
  }, []);

  return (
    <Grid width="100%" height="100%" container spacing={2} p={2}>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        display="flex"
        height="100%"
        justifyContent="space-between"
        flexDirection="column"
        alignItems="center"
      >
        <Grid>
          <Grid>
            <Typography variant="h6" color="#E30613">Impostores</Typography>
          </Grid>
          <Grid>
            {trojan.map((x) => (
              <Typography>{!x.isValid ? `${x.nome} era o impostor` : null}</Typography>
            ))}
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Typography variant="h6" color="green">Não impostores</Typography>
          </Grid>
          <Grid>
            {trojan.map((x) => (
              <Typography>{x.isValid ? `${x.nome} acabou de entrar` : null}</Typography>
            ))}
          </Grid>
        </Grid>
        <Grid />
      </Grid>
    </Grid>
  );
};

export default Impostors;
