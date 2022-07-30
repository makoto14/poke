import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCard from "../../components/PokemonCard";
import { setPokemon } from "../../store/bagStore";

const firstPokemonList = [1, 4, 7];

const First: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSelect = (id: number) => {
    dispatch(setPokemon(id));
    navigate("/adventure");
  };

  return (
    <Box>
      <Typography variant="h4">最初の1匹を選ぼう</Typography>
      <Stack spacing={2} direction="row" alignItems={"stretch"}>
        {firstPokemonList.map((id) => (
          <PokemonCard
            key={id}
            id={id}
            action={
              <Button
                size="small"
                variant="contained"
                onClick={() => onSelect(id)}
              >
                えらぶ
              </Button>
            }
          />
        ))}
      </Stack>
    </Box>
  );
};

export default First;
