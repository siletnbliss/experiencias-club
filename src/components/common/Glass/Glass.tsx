import { Box, BoxProps } from "@mantine/core";
import classes from "./Glass.module.css";
interface Props extends BoxProps {}

export const Glass = ({
  children,
  ...rest
}: React.PropsWithChildren<Props>) => {
  return (
    <Box {...rest} className={classes.glass}>
      {children}
    </Box>
  );
};
