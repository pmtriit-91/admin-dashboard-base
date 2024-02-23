import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            hỏi ngu 1: ngu là tính chất đặc biệt, có thể lây lan nhanh trong
            cộng đồng, ngu có tính bảo toàn, ngu không tự nhiên sinh ra cũng
            không tự nhiên mất đi
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            hỏi ngu 1: ngu là tính chất đặc biệt, có thể lây lan nhanh trong
            cộng đồng, ngu có tính bảo toàn, ngu không tự nhiên sinh ra cũng
            không tự nhiên mất đi
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            hỏi ngu 1: ngu là tính chất đặc biệt, có thể lây lan nhanh trong
            cộng đồng, ngu có tính bảo toàn, ngu không tự nhiên sinh ra cũng
            không tự nhiên mất đi
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            hỏi ngu 1: ngu là tính chất đặc biệt, có thể lây lan nhanh trong
            cộng đồng, ngu có tính bảo toàn, ngu không tự nhiên sinh ra cũng
            không tự nhiên mất đi
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            hỏi ngu 1: ngu là tính chất đặc biệt, có thể lây lan nhanh trong
            cộng đồng, ngu có tính bảo toàn, ngu không tự nhiên sinh ra cũng
            không tự nhiên mất đi
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Anything question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            hỏi ngu 1: ngu là tính chất đặc biệt, có thể lây lan nhanh trong
            cộng đồng, ngu có tính bảo toàn, ngu không tự nhiên sinh ra cũng
            không tự nhiên mất đi
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            hỏi ngu 1: ngu là tính chất đặc biệt, có thể lây lan nhanh trong
            cộng đồng, ngu có tính bảo toàn, ngu không tự nhiên sinh ra cũng
            không tự nhiên mất đi
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            hỏi ngu 1: ngu là tính chất đặc biệt, có thể lây lan nhanh trong
            cộng đồng, ngu có tính bảo toàn, ngu không tự nhiên sinh ra cũng
            không tự nhiên mất đi
          </Typography>
        </AccordionDetails>{" "}
        <AccordionDetails>
          <Typography>
            hỏi ngu 1: ngu là tính chất đặc biệt, có thể lây lan nhanh trong
            cộng đồng, ngu có tính bảo toàn, ngu không tự nhiên sinh ra cũng
            không tự nhiên mất đi
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default FAQ;
