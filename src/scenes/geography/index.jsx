import { Box, colors } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

function Geography() {
  return (
    <Box
      m="20px"
      sx={{
        "& .MuiBox-root": { marginBottom: "30px" },
        "& .MuiTypography-root.MuiTypography-h2": {
          margin: "0 0 5px 0",
        },
      }}
    >
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
}

export default Geography;
