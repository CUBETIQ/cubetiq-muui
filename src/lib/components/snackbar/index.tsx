import MuiSnackbar, {
  SnackbarProps as MuiSnackbarProps,
} from "@mui/material/Snackbar";
import Slide from "../slide";

export interface SnackbarProps extends MuiSnackbarProps {}

const TransitionLeft = (props: any) => {
  return <Slide {...props} direction="left" />;
};

const Snackbar: React.FC<SnackbarProps> = (props) => {
  return <MuiSnackbar TransitionComponent={TransitionLeft} {...props} />;
};

export default Snackbar;
