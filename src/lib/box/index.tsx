import MuiBox, { BoxProps as MuiBoxProps } from "@mui/material/Box";
import React from "react";

export interface BoxProps extends MuiBoxProps {}

const Box: React.FC<BoxProps> = (props) => {
  return <MuiBox {...props} />;
};

export default Box;
