import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

function Line() {
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
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}

export default Line;
