import { Alert, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { setMessage } from "../../store/app/slice";

const MessageBox = ({ open, text }) => {
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setMessage(false));
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        sx={{ padding: "20px 50px", fontSize: "16px" }}
        onClose={handleClose}
        variant="filled"
        severity="success"
      >
        {text}
      </Alert>
    </Snackbar>
  );
};
export default MessageBox;
