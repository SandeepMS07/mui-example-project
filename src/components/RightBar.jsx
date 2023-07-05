import { Box } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      flex={1}
      p={2}
      bgcolor={"coral"}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      RightBar
    </Box>
  );
};

export default RightBar;
