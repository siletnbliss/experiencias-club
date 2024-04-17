import { Box, BoxProps } from "@mantine/core";

import classes from "./Circle.module.css";

interface Props extends BoxProps {
  size: string | number;
}

export const Circle = ({ size, className, ...rest }: Props) => {
  return (
    <Box
      {...rest}
      className={`${className} ${classes.circle} rounded-full`}
      w={size}
      h={size}
      maw={"50vw"}
    ></Box>
  );
};
