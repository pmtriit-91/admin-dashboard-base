import React from "react";
import images from "../../assets/images";
import { Box } from "@mui/material";

export default function BlankPage() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <img
        src={images.pageBlankLight}
        alt="anh trong"
        style={{ height: "500px" }}
      ></img>
    </Box>
  );
}
