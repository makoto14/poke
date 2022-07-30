import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
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

const PokemonCardMini: React.FC<Props> = ({ id, action }) => {
  const pokemon = usePokemon(id);

  return (
    <Card>
      {pokemon === undefined ? (
        <CircularProgress />
      ) : (
        <>
          <Box
            css={css`
              padding: 16px;
            `}
          >
            <Stack spacing={2} direction="row" alignItems="center">
              <Box>
                <CardMedia
                  component="img"
                  image={pokemon.animate.default}
                  css={css`
                    width: 50px;
                    height: 50px;
                  `}
                />
              </Box>
              <Typography gutterBottom variant="body1" component="div">
                {pokemon.nameJa}
              </Typography>
              {action}
            </Stack>
          </Box>
        </>
      )}
    </Card>
  );
};

export default PokemonCardMini;
