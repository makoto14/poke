import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "../../components/PokemonCard";
import PokemonCardMini from "../../components/PokemonCardMini";
import { getBagPokemonList } from "../../store/bagStore";

const Bag: React.FC = () => {
  const pokemonList: number[] = useSelector(getBagPokemonList);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <Box>
      <Typography>かばん</Typography>
      {pokemonList.length === 0 ? (
        "ポケモンがいません"
      ) : (
        <Stack direction="row" spacing={2}>
          <Stack
            spacing={1}
            css={css`
              width: calc(100vw / 3);
              height: 70vh;
              overflow: auto;
            `}
          >
            {pokemonList.map((id, index) => (
              <CardActionArea
                key={index}
                onClick={() => setSelectedIndex(index)}
              >
                <PokemonCardMini id={id} />
              </CardActionArea>
            ))}
          </Stack>
          <Box
            css={css`
              width: calc((100vw / 3) * 2);
            `}
          >
            {selectedIndex === null ? (
              "せんたくしてください"
            ) : (
              <PokemonCard id={pokemonList[selectedIndex]} />
            )}
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default Bag;
