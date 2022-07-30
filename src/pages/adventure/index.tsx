import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { IconButton, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useNavigate } from "react-router-dom";

const Adventure: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Tooltip title={"かばんをひらく"}>
        <IconButton onClick={() => navigate("/bag")}>
          <ShoppingBagIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={"ずかんをひらく"}>
        <IconButton onClick={() => navigate("/library")}>
          <MenuBookIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={"さいしょにもどる"}>
        <IconButton onClick={() => navigate("/start")}>
          <HomeIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Adventure;
