import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ApiSample from "../components/ApiSample";
import { getTestNum, setTestNum } from "../store/testStore";

const Main: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const testNum: number = useSelector(getTestNum);

  const hundlePage = () => {
    navigate("/page");
  };

  const increment = () => {
    dispatch(setTestNum(testNum + 1));
  };

  const decrement = () => {
    dispatch(setTestNum(testNum - 1));
  };

  return (
    <Box>
      <Button variant="text" color="primary" onClick={hundlePage}>
        to Sub page
      </Button>
      <Button variant="text" color="primary" onClick={increment}>
        increment
      </Button>
      <Button variant="text" color="primary" onClick={decrement}>
        decrement
      </Button>
      {testNum}
      <ApiSample id={testNum} />
    </Box>
  );
};

export default Main;
