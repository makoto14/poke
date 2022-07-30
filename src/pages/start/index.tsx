import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPokemon } from "../../store/bagStore";

const Start: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reset = () => {
    dispatch(resetPokemon());
    navigate("/first");
  };

  return (
    <Box>
      start
      <Button onClick={reset}>はじめる</Button>
      <Button onClick={() => navigate("/adventure")}>つづける</Button>
    </Box>
  );
};

export default Start;
