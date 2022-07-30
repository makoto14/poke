import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { ReactNode } from "react";
import { usePokemon } from "../utils/usePokemon";

type Props = {
  id: number;
  action?: ReactNode;
};

const ApiSample: React.FC<Props> = ({ id, action }) => {
  const pokemon = usePokemon(id);

  return (
    <Card
      css={css`
        padding: 24px;
      `}
    >
      {pokemon === undefined ? (
        <CircularProgress />
      ) : (
        <>
          <Box>
            <Stack
              spacing={2}
              direction="row"
              css={css`
                border-bottom: 2px solid black;
              `}
            >
              <Box>
                <CardMedia
                  component="img"
                  image={pokemon.img.default}
                  css={css`
                    width: 200px;
                    height: 200px;
                  `}
                />
                <Typography>No. {id}</Typography>
              </Box>
              <Stack spacing={2}>
                <Typography gutterBottom variant="h5" component="div">
                  {pokemon.nameJa}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  分類:{pokemon.general}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  高さ:{pokemon.height}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  重さ:{pokemon.weight}
                </Typography>
              </Stack>
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pokemon.flavorText}
              </Typography>
            </CardContent>
            {action === undefined ? null : <CardActions>{action}</CardActions>}
          </Box>
        </>
      )}
    </Card>
  );
};

export default ApiSample;
