import { Box, Button, Typography } from "@mui/material";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import { useNavigate } from "react-router-dom";
import Copyright from "../components/atoms/copyright";
import notfound from "../assets/notfound.json";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh"
        }}
      >
        <Box sx={{ p: { xs: 1, md: 2 }, m: { xs: 1, md: 2 } }}>
          <Typography sx={{ textAlign: "center" }} variant="h6">
            Kamu Tersesat
          </Typography>
          <Lottie
            loop
            animationData={notfound}
            play
            style={{ width: "100%", height: "300px" }}
          />
          <Button
            onClick={() => navigate("/")}
            sx={{ width: "100%" }}
            variant="contained"
          >
            Kembali
          </Button>
        </Box>
      </Box>
      <Copyright />
    </div>
  );
};

export default NotFound;