import MuiSlide, { SlideProps as MuiSlideProps } from "@mui/material/Slide";

export interface SlideProps extends MuiSlideProps {}

const Slide: React.FC<SlideProps> = (props) => {
  return <MuiSlide {...props} />;
};

export default Slide;
