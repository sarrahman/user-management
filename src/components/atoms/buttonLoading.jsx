import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";

const ButtonLoading = (props) => {
  if (props.statusLoading) {
    return (
      <LoadingButton
        loading
        loadingIndicator="Loading..."
        sx={{ mt: 2, width: "100%" }}
        variant="contained"
        color="primary"
        fullWidth
      >
        Loading...
      </LoadingButton>
    );
  } else {
    return (
      <Button
      type="submit"
        onClick={props.onClick}
        sx={{ mt: 2, width: "100%" }}
        variant="contained"
        color="primary"
        fullWidth
      >
        {props.title}
      </Button>
    );
  }
};

export default ButtonLoading;