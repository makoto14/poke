import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import React from "react";
import useSWR from "swr";

type Props = {
  id: number;
};

const ApiSample: React.FC<Props> = ({ id }) => {
  const { data, error } = useSWR<any>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  return (
    <Box>
      {data === undefined ? (
        <CircularProgress />
      ) : (
        <Card
          css={css`
            width: 200px;
            height: 200px;
          `}
        >
          <CardMedia
            component="img"
            height="140"
            width="140"
            image={data.sprites.front_default}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default ApiSample;
