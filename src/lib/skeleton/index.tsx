import MuiSkeleton, {
  SkeletonProps as MuiSkeletonProps,
} from "@mui/material/Skeleton";
import React from "react";

export interface SkeletonProps extends MuiSkeletonProps {}

const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <MuiSkeleton {...props} />;
};

export default Skeleton;
