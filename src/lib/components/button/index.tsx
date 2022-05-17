import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import React from "react";

export interface ButtonProps extends MuiButtonProps {}

const Button: React.FC<ButtonProps> = (props) => {
  return <MuiButton {...props} />;
};

export default Button;
