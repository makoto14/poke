import { Box, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTestNum } from "../store/testStore";

const Page: React.FC = () => {
  const navigate = useNavigate();
  const testNum: number = useSelector(getTestNum);

  const hundleMain = () => {
    navigate("/main");
  };

  return (
    <Box>
      <Button variant="text" color="primary" onClick={hundleMain}>
        to Main page
      </Button>
      {testNum}
    </Box>
  );
};

export default Page;
